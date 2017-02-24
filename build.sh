#!/bin/bash
while read p; do
	echo "<div class='slide'><img alt='' src='photos/${p}-1920.jpg' srcset='photos/${p}-750.jpg 750w, photos/${p}-1334.jpg 1334w, photos/${p}-1920.jpg 1920w, photos/${p}-2048.jpg 2048w, photos/${p}-2560.jpg 2560w, photos/${p}-3840.jpg 3840w, photos/${p}-5120.jpg 5120w'></div>"
done < photos.txt
