---
title: "Nginx Configuration for websites and file server in Arch Linux"
date: 2023-11-11T01:30:00+00:00
---

1. Point A and AAAA records to VPS ipv4 and ipv6
2. Move public ssh key to .ssh/authorized_keys
3. Download dependencies and open ports for nginx, also enable nginx
```sh
pacman-S nginx certbot-nginx
sudo ufw allow 80
sudo ufw allow 443
sudo systemctl enable nginx --now
```
4. Create according files according to nginx configuration below
5. Create cert using `certbot —nginx`
6. Generate .htpasswd using `htpasswd` command
7. Create two folders at `/etc/nginx`, `sites-available` and `sites-enabled`

`
```conf
#sites-available/tty

# run this line to enable the site by linking available sites to enabled sites
# ln -sf sites-available/tty sites-enabled/tty

server {
    server_name ng.night0721.xyz ;
    location / {
        root /etc/nginx/website;
        index index.html
    }
    
    # google drive
    location /files {
        root /etc/nginx/files         
        autoindex on;
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd; # make sure you got the right path
    }
    
    location /discord { # proxy
        proxy_pass https://discord.com/;
        proxy_set_header Host discord.com;
        proxy_set_header X-Real-IP $remote_addr;    
    }

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/ng.night0721.xyz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ng.night0721.xyz/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = ng.night0721.xyz) {
        return 301 https://$host$request_uri;
    }
    listen 80 ;
    listen [::]:80 ;
    server_name ng.night0721.xyz ;
    return 404;
}
```

```
# nginx.conf
user http;
worker_processes auto;
worker_cpu_affinity auto;

events {
    multi_accept on;
    worker_connections 1024;
}

http {
    charset utf-8;
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    server_tokens off;
    log_not_found off;
    types_hash_max_size 4096;
    client_max_body_size 16M;

    # MIME
    include mime.types;
    default_type application/octet-stream;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log warn;

    # load configs
    include /etc/nginx/sites-enabled/*;
}
```

Useful video for setting up nginx by [BugsWriter](https://youtu.be/ugWydr_QdIY?si=vgyS-l6yWsqlSHZC)
