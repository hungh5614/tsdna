import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { BasictechniquelessonService } from './Basictechniquelesson.service';
import { Basictechniquelesson } from './entities/Basictechniquelesson.entity';

@Controller('api/basictechniquelesson')
export class BasictechniquelessonController {
  constructor(private readonly basictechniquelessonService: BasictechniquelessonService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Basictechniquelesson>> {
    return await this.basictechniquelessonService.findAll(query);
  }

}
