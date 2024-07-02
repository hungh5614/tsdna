import { extname } from 'path';
import { Request } from 'express';
import { Express } from 'express';
import * as process from 'process';
import * as ffmpeg from 'fluent-ffmpeg';
import * as fs from 'fs';
import { createWriteStream } from 'fs';
const currentDate = new Date();
import { v4 as uuidv4 } from 'uuid';

export const editFileName = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  if (
    !file.originalname.match(/\.(mov|mp4|avi|wmv|flv|mkv|webm|vob|mpeg|3gp)$/)
  ) {
    return callback(new Error('Only video files are allowed!'), false);
  }
  const name = file.originalname
    .split('.')[0]
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\s/g, '_');
  const fileExtName = extname(file.originalname);
  const currentTime = Date.now();
  callback(null, `${name}-${currentTime}${fileExtName}`);
};

export const imageFileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  if (
    !file.originalname.match(
      /\.(jpg|jpeg|png|gif|apng|avif|webp|bmp|cur|ico|tiff|tif|jfif)$/,
    )
  ) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

// get information video
export const getInformation = async (path) => {
  const file = process.env.APP_ROOT + path;
  return await infoVideo(file);
};

const infoVideo = async (path: string) => {
  try {
    return new Promise<ffmpeg.FfprobeData>((resolve, reject) => {
      ffmpeg.ffprobe(path, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const removeFile = (path: string) => {
  try {
    if (path.includes(process.env.APP_URL)) {
      path = path.replace(process.env.APP_URL, process.env.APP_ROOT);
    }
    fs.unlinkSync(path);
    console.log('Delete File successfully.');
  } catch (error) {
    console.log(error);
  }
};

export const uploadBase64ToImage = (base64: string, imageOld?: string) => {
  const decodedString = Buffer.from(base64, 'base64').toString('utf-8');

  const base64Data = decodedString.replace(
    /^data:image\/(png|jpeg|jpg);base64,/,
    '',
  );

  const fileName = uuidv4();
  const path =
    `file/upload/` +
    currentDate.getFullYear() +
    '/' +
    currentDate.getMonth() +
    '/' +
    currentDate.getDate();
  const filePath = `${path}/${fileName}.png`;

  try {
    createWriteStream(process.env.APP_ROOT + filePath, {
      encoding: 'base64',
    }).write(base64Data);
    if (imageOld) {
      removeFile(imageOld);
    }
    return { url: process.env.APP_URL + filePath };
  } catch (error) {
    return { success: false, message: 'Failed to upload image', url: '' };
  }
};
