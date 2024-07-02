import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Weather } from './entities/weather.entity';
import { WeatherService } from './Weather.service';

@Controller('api/weather')
export class WeatherController {
  constructor(private readonly WeatherService: WeatherService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Weather>> {
    return await this.WeatherService.findAll(query);
  }

}
