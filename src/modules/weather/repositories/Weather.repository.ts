import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Weather } from '../entities/weather.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class WeatherRepository extends BaseRepository<Weather> {
  constructor(private dataSource: DataSource) {
    super(Weather, dataSource.createEntityManager());
  }
}
