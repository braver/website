Koenlageveen.nl website
================

My portfolio website. All right reserved on the photos.

# resolution notes

5k      5120 × 2880  =  2560 × 1440 @2x
4k      4096 × 2160  =  2048 × 1080 @2x
UHD     3840 × 2160  =  1920 × 1080 @2x
iPad    2048 × 1536  =  1024 × 768  @2x
1080p   1920 × 1080
iPhone  750 × 1334   =  375 × 667   @2x


@1x           ↓
HD     1920 × 1080    if max-width 1920
WQHD   2560 × 1440    if max-width ∞

@2x           ↓
iPhone 750  × 1334    if @2x and max-width 375
iPhone 1334 × 750     if @2x and max-width 667
iPad   2048 × 1536    if @2x and max-width 1024
4k     3840 × 2160    if @2x and max-width 1920
5k     5120 × 2880    if @2x and max-width ∞


```html
<img alt="" src="img-1920.jpg"
         srcset="img-750.jpg 750w,
                 img-1334.jpg 1334w",
                 img-1920.jpg 1920w",
                 img-2048.jpg 2048w",
                 img-2560.jpg 2560w",
                 img-3840.jpg 3840w",
                 img-5120.jpg 5120w">
```

# building

1. Run photos through the resizer
2. Write the base filenames in photos.txt
3. Run `./build.sh` and put the output in index.html
