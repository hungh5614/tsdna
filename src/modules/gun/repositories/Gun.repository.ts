import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Gun } from '../entities/gun.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class GunRepository extends BaseRepository<Gun> {
  constructor(private dataSource: DataSource) {
    super(Gun, dataSource.createEntityManager());
  }
}
