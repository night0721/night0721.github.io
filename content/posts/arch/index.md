---
title: "Arch Linux System Configuration"
date: 2023-11-08T22:30:00+00:00
---

Here I am sharing my Arch Linux system files, and also what code I will add immediately after everytime I install Arch.

```sh
# /etc/profile

if lsmod | grep -wq "pcspkr"; then
  sudo rmmod pcspkr # Remove annoying beep sound in tty
fi

if [[ $TTY == /dev/tty1 ]]; then
    Hyprland # For no display manager
fi

# /etc/ssh/sshd_config
Port 00000 # Five digit number for security
PasswordAuthentication no
UsePAM no

# /etc/hosts
# Copy from https://github.com/StevenBlack/hosts/blob/master/hosts
# This is for adblocking by stopping connections to certain domains

# /etc/issue
N v6 (\l)
#######################################
\d \t
```
