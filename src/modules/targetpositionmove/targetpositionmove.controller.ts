import { Controller, Get, Param, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { TargetpositionmoveService } from './targetpositionmove.service';
import { Targetpositionmove } from './entities/targetpositionmove.entity';

@Controller('api/targetpositionmove')
export class TargetpositionmoveController {
  constructor(private readonly targetpositionmoveService: TargetpositionmoveService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Targetpositionmove>> {
    return await this.targetpositionmoveService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Targetpositionmove> {
    return await this.targetpositionmoveService.findOne(id);
  }
}
