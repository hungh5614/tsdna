import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Target } from './entities/target.entity';
import { TargetService } from './Target.service';

@Controller('api/target')
export class TargetController {
  constructor(private readonly gunService: TargetService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Target>> {
    return await this.gunService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Target> {
    return await this.gunService.findOne(id);
  }

}
