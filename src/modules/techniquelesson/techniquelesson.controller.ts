import { Controller, Get, Param, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { TechniquelessonService } from './techniquelesson.service';
import { Techniquelesson } from './entities/techniquelesson.entity';

@Controller('api/techniquelesson')
export class TechniquelessonController {
  constructor(private readonly techniquelessonService: TechniquelessonService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Techniquelesson>> {
    return await this.techniquelessonService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Techniquelesson> {
    return await this.techniquelessonService.findOne(id);
  }
}
