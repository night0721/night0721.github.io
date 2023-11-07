---
title: "My Version of Awesome System"
date: 2023-10-27T00:00:00+00:00
description: "List of applications and tools that make my system awesome and lightweight, including both Windows and Linux. More details can be seen on [dotfiles](https://github.com/night0721/dotfiles) repository"
---

Credits to [Thunder](https://github.com/ThunderE75/awesome-windows)

Table of Contents

*   [Applications](#applications)
    *   [Communication](#communication)
    *   [Browser](#browser)
    *   [Games](#games)
    *   [IDEs](#ides)
    *   [Languages](#languages)
    *   [Utilities](#utilities)
*   [Setup](#setup)
    *   [Windows](#windows)
    *   [Linux](#linux)
        *   [Distros](#distros)

Applications
------------

### Communication

1.  [Discord](https://discord.com/) - **Username: night.dev**
2.  [Signal](https://signal.org/) - Better than WhatsApp
3.  [Instagram](https://www.instagram.com/) - 99% people use it
4.  [WhatsApp](https://www.whatsapp.com/) - 99% people use it

### Browser

1.  [Brave](https://brave.com/) - Privacy focused but too much on cryptocurrency
2.  [Firefox Hardened](https://youtu.be/Fr8UFJzpNls) - Best
3.  [Librewolf](https://librewolf.net/) - Alternative to Firefox

#### Brave Extensions

1.  [Lotus](https://github.com/night0721/Lotus) - My own extension for playing music or showing time at new tab
2.  [Allow CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) - For bypassing CORS
3.  [Bitwarden](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb?hl=en) - Password manager
4.  [Chrome Remote Desktop](https://chrome.google.com/webstore/detail/chrome-remote-desktop/inomeogfingihgjfjlpeplalcfajhgai?hl=en) - remote desktop
5.  [Color Picker for Chrome](https://chrome.google.com/webstore/detail/color-picker-for-chrome/clldacgmdnnanihiibdgemajcfkmfhia?hl=en) - Picking colors for web development
6.  [Disable Content-Security-Policy](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden?hl=en) - For bypassing CSP
7.  [Enhancer for YouTube](https://chrome.google.com/webstore/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle?hl=en) - Improve UX, themes, playback speed
8.  [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en) - Viewing JSON for debugging
9.  [LibRedirect](https://github.com/libredirect/browser_extension) - Redirect popular sites to alternative privacy-friendly sites
10.  [Surfshark VPN Extension](https://chrome.google.com/webstore/detail/surfshark-vpn-extension/ailoabdmgclmfmhdagmlohpjlbpffblp?hl=en) - VPN

#### Firefox

I use Firefox Hardened, but you can use Librewolf(fork of Firefox). For hardening, I use [BetterFox](https://github.com/yokoffing/Betterfox), you can copy the settings from user.js from there.
```js
// Add a line at override settings in BetterFox
// PREF: restore Firefox accounts
user_pref("identity.fxaccounts.enabled", true);
```                 

##### Videos for Firefox

1.  [Harden Firefox](https://youtu.be/Fr8UFJzpNls)
2.  [Search Engine and sites without trackers](https://youtu.be/_HlFSg-9dpU)
3.  [Themes](https://www.youtube.com/watch?v=0QVs1jVuA8c)
4.  [Coding Themes](https://www.youtube.com/watch?v=bw_M7q3Mtag)

##### Themes

[Themes Store](https://trickypr.github.io/FirefoxCSS-Store.github.io/#)

[Themes Subreddit](https://www.reddit.com/r/FirefoxCSS/)

##### Extensions

1.  [Bitwarden - Free Password Manager](https://addons.mozilla.org/en-GB/firefox/addon/bitwarden-password-manager/)
2.  [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/)
3.  [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)
4.  [Enhancer for YouTube](https://addons.mozilla.org/en-GB/firefox/addon/enhancer-for-youtube/)
5.  [LibRedirect](https://addons.mozilla.org/en-GB/firefox/addon/libredirect/)
6.  [Surfshark VPN Extension](https://addons.mozilla.org/en-GB/firefox/addon/surfshark-vpn-proxy/)
7.  [uBlock Origin](https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/)

### Games

1.  [Steam](https://store.steampowered.com/)
2.  [F1 22](https://store.steampowered.com/app/1692250/F1_22/)
3.  [Asseto Corsa](https://store.steampowered.com/app/244210/Assetto_Corsa/) [Context Manager](https://assettocorsa.club/content-manager.html)

### IDEs

1.  [Visual Studio Code](https://code.visualstudio.com/) - Best Code Editor
2.  [VS Codium](https://vscodium.com/) - VS Code without telemetry
3.  [Visual Studio](https://visualstudio.microsoft.com/) - IDE for C/C++/C# and .NET development
4.  [IntelliJ IDEA](https://www.jetbrains.com/idea/) - IDE for Java/Kotlin development
5.  [CLion](https://www.jetbrains.com/clion/) - IDE for C/C++ development
6.  [PyCharm](https://www.jetbrains.com/pycharm/) - IDE for Python development
7.  [WebStorm](https://www.jetbrains.com/webstorm/) - IDE for Web development
8.  [NeoVim](https://neovim.io/) - Vim but asynchronous

#### VS Code

##### Extensions

1.  [ChatGPT - EasyCode](https://marketplace.visualstudio.com/items?itemName=EasyCodeAI.chatgpt-gpt4-gpt3-vscode)
2.  [Discord Rich Presence](https://marketplace.visualstudio.com/items?itemName=LeonardSSH.vscord)
3.  [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
4.  [Catppuccin Icons for VSCode](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc-icons)
5.  [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
6.  [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
7.  [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
8.  [Office Viewer(Mardown Editor)](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-office)
9.  [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
10.  [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
11.  [Python Indent](https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent)
12.  [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
13.  [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

##### Themes

1.  [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
2.  [Abyss](https://marketplace.visualstudio.com/items?itemName=gerane.Theme-Abyss)
3.  [Sweet Dracula](https://marketplace.visualstudio.com/items?itemName=PROxZIMA.sweetdracula)

#### Visual Studio

##### Extensions

1.  [Wakatime](https://marketplace.visualstudio.com/items?itemName=WakaTime.WakaTime)
2.  [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilotvs)

##### Themes

1.  [Night Owl](https://marketplace.visualstudio.com/items?itemName=God0nlyKnows.NightOwl)
2.  [Cyberpunk - Theme](https://marketplace.visualstudio.com/items?itemName=T0uchM3.CTVS19)

### Languages

_Disclaimer: I only include languages that requires installing to use_

1.  [Python](https://www.python.org/)
2.  [Java](https://www.java.com/en/)
3.  [C/C++](https://www.cprogramming.com/) - [mingw64 tutorial](https://www.youtube.com/watch?v=k6juv3mIr9o)
4.  [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
5.  [node.js](https://nodejs.org/en/)

### Utilities

1.  [BleachBit](https://www.bleachbit.org/) - CCleaner alternative
2.  [Postman](https://www.postman.com/) - API testing
3.  [Sideloadly](https://sideloadly.io/) - Sideload apps to iOS
4.  [OBS Studio](https://obsproject.com/) - Screen recording
5.  [ShareX](https://getsharex.com/) - Screenshot with cool effects
6.  [Adobe Products](https://www.adobe.com/) - Photoshop, Illustrator, Premiere Pro, After Effects, etc.
7.  [Figma](https://www.figma.com/) - Designing
8.  [GIMP](https://www.gimp.org/) - Photoshop alternative
9.  [git](https://git-scm.com/) - Version control
10.  [Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) - More customisable shell, you can you kitty or konsole in Linux
11.  [winget](https://github.com/microsoft/winget-cli) - Package manager for Windows
12.  [Chocolatey](https://chocolatey.org/) - Package manager for Windows
13.  [MongoDB Compass](https://www.mongodb.com/products/compass) - MongoDB GUI
14.  [czkawka](https://github.com/qarmin/czkawka) - Duplicate file finder
15.  [Surfshark](https://surfshark.com/) - VPN
16.  [GeForce Experience](https://www.nvidia.com/en-gb/geforce/geforce-experience/download/) - Boost Gaming Experience with NVIDIA GPUs
17.  [iTunes](https://sideloadly.io/) - Compulsory to Sideloadly
18.  [iCloud](https://sideloadly.io/) - Compulsory to Sideloadly
19.  [Starship](https://starship.rs/) - Customizable shell prompt
20.  [Wallpaper Engine](https://store.steampowered.com/app/431960/Wallpaper_Engine/) - Animated customizable wallpaper app for Windows
21.  [Epic Games](https://www.epicgames.com/site/en-US/home) - To install apps
22.  [Unreal Engine](https://www.unrealengine.com/en-US) - To develop games

Setup
-----

### Windows

I recommend to customise your own Windows ISO using [NTLite](https://www.ntlite.com/) or [MSMG Toolkit](https://msmgtoolkit.in/) and refer to [this](https://www.youtube.com/watch?v=xLCWtC6UYrM) video for more information.

After installing, debloat your system using [this](https://github.com/ChrisTitusTech/winutil/) script. You might also want to use [Sophia Script](https://github.com/farag2/Sophia-Script-for-Windows) for more debloating and customisation of your system. (It requires your system to be on latest update which you might have Windows Update disabled based on your ISO file)

My Env Variables: [image](https://media.discordapp.net/attachments/842014909264953354/1146758540971753592/image.png)

#### Windows Terminal

[Article](https://learn.microsoft.com/en-us/windows/terminal/tutorials/custom-prompt-setup)

[Themes](https://windowsterminalthemes.dev/)

[Fonts](https://www.nerdfonts.com/font-downloads)

Font: JetBrainsMono Nerd Font

Theme:

*   Overnight Slumber
*   Pro
*   Retrowave

For settings, go [here](https://github.com/night0721/night0721.github.io/blob/master/static/terminal-settings.json)

### Linux

Read this [article](https://christitus.com/choose-linux-distro/) for more information

#### Distros

1.  Debian - Stable as rock
2.  Arch - Customizable
3.  Ubuntu/Mint - Beginner friendly
