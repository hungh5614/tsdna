import { Controller, Get, Param, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { AddonscoreService } from './addonscore.service';
import { Addonscore } from './entities/Addonscore.entity';

@Controller('api/addonscore')
export class AddonscoreController {
  constructor(private readonly addonscoreService: AddonscoreService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Addonscore>> {
    return await this.addonscoreService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Addonscore> {
    return await this.addonscoreService.findOne(id);
  }
}
