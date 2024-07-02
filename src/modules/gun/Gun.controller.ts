import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Gun } from './entities/gun.entity';
import { GunService } from './Gun.service';

@Controller('api/gun')
export class GunController {
  constructor(private readonly gunService: GunService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Gun>> {
    return await this.gunService.findAll(query);
  }

}
