import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Shotresult } from '../entities/shotresult.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class ShotresultRepository extends BaseRepository<Shotresult> {
  constructor(private dataSource: DataSource) {
    super(Shotresult, dataSource.createEntityManager());
  }
}
