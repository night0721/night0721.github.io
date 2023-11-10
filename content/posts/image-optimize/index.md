---
title: "How to optimize image for websites from the command line"
date: 2023-11-10T22:16:00+00:00
---

When hosting your website with a lot of images, your users need a lot of bandwidth just to load some images, but most of the time the image doesn't need to be that big for the user to load. Here is a guide on how to optimize images for these kind of situations, credits to [Eric Murphy](https://youtu.be/8zj44m0hAoU?si=wAkGlGn5CSWYKR9n). I typed the video in text format as it is such a good video that I want to take notes of that.

1. Install imagemagick
```sh
sudo pacman -S imagemagick
```

# Optimise JPGs

```sh
convert image.jpg -resize 400x400 image.min.jpg # resize image as you don't always need that big
convert image.jpg -quality 75 image.min.jpg # reduce quality of image, 75% is a good compromise between file size and quality
convert image.jpg -strip image.min.jpg # remove metadata (eg camera details, location, etc.)

convert image.jpg -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize 0 converted.jpg # best for web quality wise
```

You can make it into a shell script
```sh
#!/bin/sh

convert $1 -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize $2 $3
```

# Optimise PNGs

Mostly same as JPGs

# Optimise batch of files at a time

```
mogrify -sampling-factor 4:2:0 -strip -quality 75 -interlace JPEG -colorspace sRGB -resize 400 -path "opt" *.jpg # converting all jpgs and put all converted jpgs into opt folder
```

# Optimise SVGs

First install svgo with npm

```sh
npm i -g svgo
```

Then run
```sh
svgo logo.svg -o logo.min.svg
```
# Batch convert SVGs

```sh
svgo -f ./assets/svgs -o ./assets/optimiszedsvgs # -f specifiying the directory and -o is the output directory
```
