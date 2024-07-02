import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Bullet } from '../entities/bullet.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class BulletRepository extends BaseRepository<Bullet> {
  constructor(private dataSource: DataSource) {
    super(Bullet, dataSource.createEntityManager());
  }
}
