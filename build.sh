#!/bin/bash

# maintain ~2*64px margin
# 750 1920 2560 5120

while read p; do
	echo "<div class='slide'><img alt='' src='photos/${p}-1920.jpg' srcset='photos/${p}-750.jpg 878w, photos/${p}-1920.jpg 2048w, photos/${p}-2560.jpg 2688w, photos/${p}-5120.jpg 5248w'></div>"
done < photos.txt
