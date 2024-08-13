import { Controller, Get, Param, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { TargetcoverinlessonService } from './targetcoverinlesson.service';
import { Targetcoverinlesson } from './entities/targetcoverinlesson.entity';

@Controller('api/targetcoverinlesson')
export class TargetcoverinlessonController {
  constructor(private readonly targetcoverinlessonService: TargetcoverinlessonService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Targetcoverinlesson>> {
    return await this.targetcoverinlessonService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Targetcoverinlesson> {
    return await this.targetcoverinlessonService.findOne(id);
  }
}
