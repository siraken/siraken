# ffmpegでm3u8からWebビデオを保存する

![screenshot](./00001.jpg)

```bash
$ ffmpeg -i https://m3u8のURL.m3u8 -movflags faststart -c copy -bsf:a aac_adtstoasc 保存ファイル名.mp4
```