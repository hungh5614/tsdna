import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Targetpositionmove } from '../entities/targetpositionmove.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class TargetpositionmoveRepository extends BaseRepository<Targetpositionmove> {
  constructor(private dataSource: DataSource) {
    super(Targetpositionmove, dataSource.createEntityManager());
  }
}
