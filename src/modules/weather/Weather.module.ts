import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { WeatherController } from './Weather.controller';
import { WeatherService } from './Weather.service';
import { WeatherRepository } from './repositories/Weather.repository';
@Module({
  imports: [DatabaseModule],
  controllers: [WeatherController],
  providers: [
    WeatherService, WeatherRepository
  ],
  exports: [WeatherService]
})

export class WeatherModule { }