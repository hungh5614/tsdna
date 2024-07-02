import { IsBase64 } from 'class-validator';

export class MultipleFileDTO {
  photo_url: string[];
}

export class UploadBase64Dto {
  @IsBase64()
  base64Image: string;
}
