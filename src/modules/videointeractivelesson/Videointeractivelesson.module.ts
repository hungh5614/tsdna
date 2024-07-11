import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { VideointeractivelessonRepository } from './repositories/Videointeractivelesson.repository';
import { VideointeractivelessonService } from './Videointeractivelesson.service';
import { VideointeractivelessonController } from './Videointeractivelesson.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [VideointeractivelessonController],
  providers: [
    VideointeractivelessonService, VideointeractivelessonRepository
  ],
  exports: [VideointeractivelessonService]
})

export class VideointeractivelessonModule { }