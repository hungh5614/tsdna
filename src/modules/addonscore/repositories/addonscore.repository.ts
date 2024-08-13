import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Addonscore } from '../entities/Addonscore.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class AddonscoreRepository extends BaseRepository<Addonscore> {
  constructor(private dataSource: DataSource) {
    super(Addonscore, dataSource.createEntityManager());
  }
}
