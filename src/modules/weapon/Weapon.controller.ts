import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { WeaponService } from './Weapon.service';
import { Pagination } from 'src/utilities/base.interface';
import { Weapon } from './entities/Weapon.entity';

@Controller('api/weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Weapon>> {
    return await this.weaponService.findAll(query);
  }

}
