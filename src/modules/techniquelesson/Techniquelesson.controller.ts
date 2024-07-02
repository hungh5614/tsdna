import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { TechniquelessonService } from './Techniquelesson.service';
import { Techniquelesson } from './entities/Techniquelesson.entity';

@Controller('api/techniquelesson')
export class TechniquelessonController {
  constructor(private readonly techniquelessonService: TechniquelessonService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Techniquelesson>> {
    return await this.techniquelessonService.findAll(query);
  }

}
