#!/usr/bin/bash

pkg install mpv -y
pkg install cowsay -y
pkg install figlet -y
pkg update -y
pkg upgrade -y
pkg install wget -y
pkg install ffmpeg libwebp -y
pkg install nodejs -y
pkg install tesseract -y
npm i node-tesseract-ocr
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

#!/usr/bin/bash

figlet beta version
echo -e "> enter to next"
read enter
clear
node index