import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { VideointeractivelessonService } from './Videointeractivelesson.service';
import { Videointeractivelesson } from './entities/Videointeractivelesson.entity';

@Controller('api/videointeractivelesson')
export class VideointeractivelessonController {
  constructor(private readonly videointeractivelessonService: VideointeractivelessonService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Videointeractivelesson>> {
    return await this.videointeractivelessonService.findAll(query);
  }

}
