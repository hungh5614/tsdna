import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Targetcoverinlesson } from '../entities/targetcoverinlesson.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class TargetcoverinlessonRepository extends BaseRepository<Targetcoverinlesson> {
  constructor(private dataSource: DataSource) {
    super(Targetcoverinlesson, dataSource.createEntityManager());
  }
}
