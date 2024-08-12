import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Target } from '../entities/target.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class TargetRepository extends BaseRepository<Target> {
  constructor(private dataSource: DataSource) {
    super(Target, dataSource.createEntityManager());
  }
}
