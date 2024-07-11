import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Laser } from './entities/laser.entity';
import { LaserService } from './Laser.service';

@Controller('api/laser')
export class LaserController {
  constructor(private readonly laserService: LaserService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Laser>> {
    return await this.laserService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Laser> {
    return await this.laserService.findOne(id);
  }
  
}
