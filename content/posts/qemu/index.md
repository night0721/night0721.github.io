---
title: "QEMU/KVM NVIDIA GPU Passthrough with AMD CPU in Arch Linux"
date: 2023-11-09T08:30:00+00:00
---

This document catalogs my working setup for configuring an Arch Linux host OS to run a Windows 10 VM while passing through a virtualised NVIDIA GPU with a AMD CPU.

# Requirements:
Make sure you have 2 or more GPUs
CPU with multiple cores and virtualization support, this can be checked with
```sh
lscpu | grep "Virtualization"
```
If not, go to BIOS and enable it

# Prerequisites

```sh
# Download the required packages
yay -S qemu-full libvirt virt-manager virt-viewer bridge-utils
# Add yourself into groups so to solve permission issues
usermod -aG libvirt,kvm,libvirt-qemu,input,disk,audio,video [your username]
# Enable systemd service
systemctl enable libvirtd.socket
```

# Install VM

Start Virtual Machine Manager(virt-manager)
At VM Manager, you may not see there is QEMU/KVM - User session. For that, click File->Add Connection. Choose **QEMU/KVM user session** and press connect.

## Creating the VM

Click plus symbol on top left corner
1. Choose Local install media
2. Choose the ISO file
3. Pass **half** of your RAM and **half** of CPU cores
4. If you choose to use qcow2 format, more than 50 GB is recommended, of course you can use a dedicated drive
5. Make sure to click **Customize confirmation before install**

This will create a new window with your VM configuration, make sure chipset is Q35 and boot firmware is UEFI (it should be like `UEFI x86_64: /usr/share/edk2/x64/OVMF_CODE.secboot.4m.fd`). After that, go to CPU section, untick copy host CPU configuration, make sure Model is host-passthrough. Open Topology sub-menu and click manually set CPU topology, then set **1 socket**, **half of your cores**, **1 thread**.


# Isolate GPU
1. Identify PCI ID of GPU

```sh
lspci -nn | grep -E "NVIDIA"

# Example output
# 01:00.0 VGA compatible controller [0300]: NVIDIA Corporation TU117M [GeForce GTX 1650 Ti Mobile] [10de:1f95] (rev a1)
# 01:00.1 Audio device [0403]: NVIDIA Corporation Device [10de:10fa] (rev a1)

# Copy the ID inside the square brackets and seperate them with a comma
# 10de:1f95,10de:10fa

# or alternative
shopt -s nullglob
for g in $(find /sys/kernel/iommu_groups/* -maxdepth 0 -type d | sort -V); do
    echo "IOMMU Group ${g##*/}:"
    for d in $g/devices/*; do
        echo -e "\t$(lspci -nns ${d##*/})"
    done;
done;
```

2. Enable IOMMU for AMD CPU

```sh
# In your /etc/default/grub, add these parameters to GRUB_CMDLINE_LINUX_DEFAULT(kernel parameters)
amd_iommu=on iommu=pt vfio-pci.ids=(ids you copied, without bracket)
# Example config
# GRUB_CMDLINE_LINUX_DEFAULT="quiet splash amd_iommu=on iommu=pt vfio-pci.ids=10de:1f95,10de:10fa"

# Then update you grub config by
sudo grub-mkconfig -o /boot/grub/grub.cfg

reboot
```

3. Edit mkinitcpio.conf

```sh
# Add these to MODULES
# vfio vfio_iommu_type1 vfio_pci

# Example Config
# MODULES=(vfio vfio_iommu_type1 vfio_pci amdgpu nvidia nvidia_modeset nvidia_uvm nvidia_drm)

# Add modconf to HOOKS

# Example Config
# HOOKS=(base udev plymouth autodetect modconf kms keyboard keymap consolefont block filesystems fsck)
```
4. Edit modprobe

```sh
sudo touch /etc/modprobe.d/vfio.conf
sudoedit /etc/modprobe.d/vfio.conf
# Type these things in
options vfio-pci ids=(ids you copied, without bracket)
# Example config
options vfio-pci ids=10de:1f95,10de:10fa

# After that run
sudo mkinitcpio -p linux

reboot
```

5. Prove that GPU have been isolated

```sh
lspci -k | grep -E "vfio-pci|NVIDIA"
# You should see output if it is successful
```

6. Download virtio Windows drivers

Go to [virtio Github README](https://github.com/virtio-win/virtio-win-pkg-scripts#downloads) and download **Stable virtio-win ISO**

7. Add virtio drivers

At VM Config, go to CDROM and import virtio drivers by selecting the ISO file.

8. Add PCI Host Devices

At VM Config, click "Add Hardware" and select PCI Host Device then choose both NVIDIA devices. Then run the VM, first you might encounter some permissions issue(I did), for that try edit `/etc/libvirt/qemu.conf`, add these lines
```sh
user = "night"
group = "libvirt-qemu"
cgroup_device_acl = [
    "/dev/vfio/9", "/dev/null", "/dev/full", "/dev/zero",
    "/dev/random", "/dev/urandom",
    "/dev/ptmx", "/dev/kvm"
]
```

If you face memory [issue](https://www.reddit.com/r/VFIO/comments/mrs4wg/libvirt_error_cannot_limit_locked_memory/
), edit `/etc/security/limits.conf` and add

```sh
night hard memlock 28388608
```
or try
```sh
sudo chmod a+rw /dev/vfio/9
```

9. Add Drivers in Windows

Run the VM and navigate to the mounted CD-ROM and run **virtio-win-guest-tools** and go through the menu
Reboot
After reboot, go to [NVIDIA](https://www.nvidia.co.uk/Download/index.aspx) and download official GPU drivers
Then go to task manager to see if GPU exist

10. Optimise VM

Shutdown the VM, go to VM configuration. At Video, normally "Video QXL", change QXL to virtio. Then click Add Hardware, navigate to **Channel** and add **org.qemu.guest_agent**.
Run the VM and check the State is connected at the guest agent channel

11. If mouse don't work

Navigate to CD-ROM using keyboard and execute **virtio-win-gt-x64** using spacebar to navigate menu
Choose Remove from the menu
Reboot

12. Passthrough disks

Run
```sh
virt-viewer --connect=qemu:///session --domain-name [vm name]

```
File->Preferences
Click Share folder and choose the folder you want to share to the VM and click X and wait

Note:
Right click at QEMU/KVM User session and Click Details 
Copy the Libvirt URI to --connect
Domain name is the VM name

# References

https://christitus.com/vm-setup-in-linux/  
https://christitus.com/windows-inside-linux/  
https://christitus.com/vm-setup-in-linux/  
https://christitus.com/setup-qemu-in-archlinux/  
https://github.com/tuh8888/libvirt_win10_vm  
https://github.com/BeanGreen247/ArchLinux-KDE-Plasma-setup-script/blob/main/vfio-readme.md  
https://askubuntu.com/questions/1406888/ubuntu-22-04-gpu-passthrough-qemu  
https://wiki.archlinux.org/title/PCI_passthrough_via_OVMF  
https://wiki.archlinux.org/title/QEMU/Guest_graphics_acceleration  
https://www.reddit.com/r/VFIO/comments/fxvt2d/help_with_seamless_gpu_passthrough_guest_gpu/  
