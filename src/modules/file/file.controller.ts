import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { diskStorage } from 'multer';

import { Express, Request } from 'express';
import {
  FastifyFileInterceptor,
  FastifyFilesInterceptor,
} from 'nest-fastify-multer';
import { MultipleFileDTO, UploadBase64Dto } from './dto/multiple-files-dto';
import { ckeditorFileMapper, filesMapper } from '../../utilities/file-mappter';
import {
  editFileName,
  imageFileFilter,
} from '../../utilities/file-upload-util';
import { createWriteStream } from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';
import * as process from 'process';
import * as ffmpeg from 'fluent-ffmpeg';
import * as ffprobe from 'ffprobe-static';

const currentDate = new Date();
type File = Express.Multer.File;

@Controller()
export class FileController {
  constructor() {
    ffmpeg.setFfprobePath(ffprobe.path);
  }
  @Post('api/file/upload')
  @FastifyFilesInterceptor('photo_url', 10, {
    storage: diskStorage({
      destination:
        './file/upload/' +
        currentDate.getFullYear() +
        '/' +
        currentDate.getMonth() +
        '/' +
        currentDate.getDate(),
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  })
  uploadFilesApiPrefix(
    @Req() req: Request,
    @UploadedFiles() files: File[],
    @Body() body: MultipleFileDTO,
  ) {
    return { ...body, photo_url: filesMapper({ files, req }) };
  }

  @Post('api/file/video')
  @FastifyFilesInterceptor('video_url', 10, {
    storage: diskStorage({
      destination:
        './file/upload/' +
        currentDate.getFullYear() +
        '/' +
        currentDate.getMonth() +
        '/' +
        currentDate.getDate(),
      filename: editFileName,
    }),
  })
  uploadDocumentsApiPrefix(
    @Req() req: Request,
    @UploadedFiles() files: File[],
    @Body() body: MultipleFileDTO,
  ) {
    return { ...body, photo_url: filesMapper({ files, req }) };
  }

  @Post('api/file/ckeditor-upload')
  @FastifyFileInterceptor('upload', {
    storage: diskStorage({
      destination:
        './file/upload/' +
        currentDate.getFullYear() +
        '/' +
        currentDate.getMonth() +
        '/' +
        currentDate.getDate(),
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  })
  ckeditorUploadApiPrefix(@Req() req: Request, @UploadedFile() file: File) {
    return ckeditorFileMapper({ file, req });
  }

  @Post('api/base64')
  async uploadImage(@Body() uploadBase64Dto: UploadBase64Dto) {
    const decodedString = Buffer.from(
      uploadBase64Dto.base64Image,
      'base64',
    ).toString('utf-8');

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
      await createWriteStream(process.env.APP_ROOT + filePath, {
        encoding: 'base64',
      }).write(base64Data);
      return { success: true, url: process.env.APP_URL + filePath };
    } catch (error) {
      return { success: false, message: 'Failed to upload image' };
    }
  }

  // get information video
  @Post('api/information-video')
  async getInformation(@Body() data) {
    const { filename } = data;
    const file = process.env.PATH_FILE_INFO + filename;
    return await this.infoVideo(file);
  }

  async infoVideo(path: string) {
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
  }
}
