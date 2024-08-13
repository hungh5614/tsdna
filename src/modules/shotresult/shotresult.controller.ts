import { Controller, Get, Param, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { ShotresultService } from './shotresult.service';
import { Shotresult } from './entities/shotresult.entity';

@Controller('api/shotresult')
export class ShotresultController {
  constructor(private readonly shotresultService: ShotresultService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Shotresult>> {
    return await this.shotresultService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Shotresult> {
    return await this.shotresultService.findOne(id);
  }
}
