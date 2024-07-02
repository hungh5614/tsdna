import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Weapon } from '../entities/Weapon.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class WeaponRepository extends BaseRepository<Weapon> {
  constructor(private dataSource: DataSource) {
    super(Weapon, dataSource.createEntityManager());
  }
}
