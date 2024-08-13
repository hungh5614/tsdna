import { Controller, Get, Param, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { CalibgunService } from './calibgun.service';
import { Calibgun } from './entities/calibgun.entity';

@Controller('api/calibgun')
export class CalibgunController {
  constructor(private readonly calibgunService: CalibgunService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Calibgun>> {
    return await this.calibgunService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Calibgun> {
    return await this.calibgunService.findOne(id);
  }
}
