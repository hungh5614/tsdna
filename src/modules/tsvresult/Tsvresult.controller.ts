import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Tsvresult } from './entities/Tsvresult.entity';
import { TsvresultService } from './Tsvresult.service';

@Controller('api/tsvresult')
export class TsvresultController {
  constructor(private readonly gunService: TsvresultService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Tsvresult>> {
    return await this.gunService.findAll(query);
  }

  @Get('detail/:id')
  async Detail(@Param('id') id: number) {
    return await this.gunService.findOne(id);
  }

}
