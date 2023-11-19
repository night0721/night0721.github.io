---
title: "How to setup password-store in Linux"
date: 2023-11-19T17:30:00+00:00
---

First download zbar pass pass-otp gnupg
1. gpg --full-gen-key # generate gpg key for encrypting password
2. pass init <username@domain>
3. pass add xxxx
4. pass xxxx # get password after entering passphrase of gpg key
pass ls # list out all password stored
passmenu [--type] # for dmenu, with --type it prints to shell

For OTP:
Download the QR code of the OTP and run
```sh
zbarimg -q [img path] # copy the file content including the otpauth://

```sh
pass otp add xxxx # paste the file content
pass xxxx # give the otpauth://
pass otp xxxx # give the otp
```
