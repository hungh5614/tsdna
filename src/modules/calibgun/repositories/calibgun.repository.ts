import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Calibgun } from '../entities/calibgun.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class CalibgunRepository extends BaseRepository<Calibgun> {
  constructor(private dataSource: DataSource) {
    super(Calibgun, dataSource.createEntityManager());
  }
}
