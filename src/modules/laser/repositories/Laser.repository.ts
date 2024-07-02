import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/utilities/base.repository';
import { Laser } from '../entities/laser.entity';

@Injectable()
export class LaserRepository extends BaseRepository<Laser> {
  constructor(private dataSource: DataSource) {
    super(Laser, dataSource.createEntityManager());
  }
}
