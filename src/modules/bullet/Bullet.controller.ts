import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Bullet } from './entities/bullet.entity';
import { BulletService } from './Bullet.service';

@Controller('api/bullet')
export class BulletController {
  constructor(private readonly bulletService: BulletService) {}

  
  @Get()
  async findAll(@Query() query): Promise<Pagination<Bullet>> {
    return await this.bulletService.findAll(query);
  }

}
