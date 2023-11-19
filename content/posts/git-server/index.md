---
title: "How to setup git server on a VPS"
date: 2023-11-18T01:30:00+00:00
---

1. First login to your VPS as root user
```sh
useradd -m git
su git
cd
mkdir .ssh && chmod 700 .ssh
touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
```

2. Generate SSH key on your local machine
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub | ssh USER@HOST "cat >> ~/.ssh/authorized_keys"
```
To have interface for managing your repositories you can use [cgit](https://git.zx2c4.com/cgit/about/).
For more information about setting up git server you can read this articles:
[git website](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)
[interface, frotend, tools for git](https://archive.kernel.org/oldwiki/git.wiki.kernel.org/index.php/Interfaces,_frontends,_and_tools.html#Web_Interface)
