---
title: "How to solve bluetooth issues in Arch Linux"
date: 2023-11-09T22:30:00+00:00
---

Recently I wanted to connect my earphones via bluetooth to my Arch Linux but I found out it just either could not connect or repeating connect and disconnect. Not many solutions from the internet solve my issue, though. But this one worked, so to share the solution to you guys. Note: It is for someone who has been using pulseaudio.

So this is basically the script that you need to run. It removes pulseaudio and replace it with pipewire, which is aimed to replace pulseaudio. Then enabling systemd services for current user.
```sh
sudo pacman -Rdd pulseaudio
yay -S pipewire-{jack,alsa,pulse} bluez-git wireplumber
sudo rm -rf /var/lib/bluetooth # remove configuration
systemctl --user enable --now pipewire.service pipewire.socket pipewire-pulse.service pipewire-pulse.socket wireplumber.service
sudo systemctl restart bluetooth

```
