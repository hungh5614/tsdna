import { json, Request } from 'express';
import { Express } from 'express';
import * as fs from 'fs';
import { exec, execSync } from 'child_process';
import * as path from 'path';
import { getInformation } from './file-upload-util';
const appUrl = process.env.APP_URL;
const appRoot = process.env.APP_ROOT;
const ffmpeg = process.env.FFMPEG;

interface FileMapper {
  file: Express.Multer.File;
  req: Request;
}

interface FilesMapper {
  files: Express.Multer.File[];
  req: Request;
}

export const filesMapper = ({ files, req }: FilesMapper) => {
  return files.map((file) => {
    const appUrl = process.env.APP_URL;
    const pathFileInfo = process.env.PATH_FILE_INFO;
    const image_url = appUrl + file.path;
    let fileNameNew = '';
    let imageUrlNew = '';
    const ffmpegCmd = process.env.FFMPEG;
    // Convert to MP4
    if (path.extname(file.filename).toLowerCase() !== 'mp4') {
      const videoInformation = path.parse(image_url);
      const newVideo =
        pathFileInfo +
        videoInformation.dir +
        '/' +
        videoInformation.name +
        '.mp4';
      const cmd = `${ffmpegCmd} -i ${
        pathFileInfo + file.path
      } -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k ${newVideo}`;
      console.log(cmd);
      try {
        if (!fs.existsSync(newVideo)) {
          execSync(cmd);
          fileNameNew = videoInformation.name + '.mp4';
          imageUrlNew = videoInformation.dir + '/' + fileNameNew;
          console.log(`Convert video generated successfully.`);
        }
      } catch (e) {
        console.error(`Failed to convert: ${e.message}`);
      }
    }

    return {
      originalname: file.originalname,
      filename: fileNameNew ?? file.filename,
      image_url: imageUrlNew ?? image_url,
    };
  });
};

export const filesMapperGetData = async ({ files }: FilesMapper) => {
  if (!files?.[0]) return null;
  const file = files?.[0];
  let name = file.filename;
  let filePath = file.path;
  // Convert to MP4
  if (path.extname(file.filename).toLowerCase() !== 'mp4') {
    const videoInformation = path.parse(filePath);
    const urlNewFile =
      videoInformation.dir + '/' + videoInformation.name + '.mp4';
    const cmd = `${ffmpeg} -i ${
      appRoot + file.path
    } -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k ${
      appRoot + urlNewFile
    }`;
    try {
      if (!fs.existsSync(appRoot + urlNewFile)) {
        execSync(cmd);
        filePath = urlNewFile;
        name = videoInformation.name + '.mp4';
        console.log(`Convert video generated successfully.`);
      }
    } catch (e) {
      console.error(`Failed to convert: ${e.message}`);
    }
  }

  // get information
  let metadata = null;
  let size = 0;
  let duration = 0;
  let fps = 0;
  let height = 0;
  let width = 0;
  try {
    const informationVideo = await getInformation(filePath);
    if (informationVideo) {
      metadata = JSON.stringify(informationVideo);
      size = informationVideo?.format?.size ?? 0;
      duration = informationVideo?.format?.duration ?? 0;
      const infoVideoArray = informationVideo.streams.filter(
        (value) => value.codec_type === 'video',
      );
      if (infoVideoArray?.length) {
        const info = infoVideoArray[0];
        fps = info?.avg_frame_rate ?? 0;
        height = info?.height ?? 0;
        width = info?.width ?? 0;
      }
    }
  } catch (e) {
    console.log(e);
  }
  if (typeof fps === 'string') {
    const fpsArray: any[] = String(fps).split('/');
    fps = fpsArray[0] / fpsArray[1];
  }
  return {
    size,
    width,
    height,
    fps,
    duration,
    metadata,
    name,
    path: appUrl + filePath,
  };
};

export const ckeditorFileMapper = ({ file, req }: FileMapper) => {
  const url = process.env.APP_URL + file.path;
  return {
    url,
  };
};
