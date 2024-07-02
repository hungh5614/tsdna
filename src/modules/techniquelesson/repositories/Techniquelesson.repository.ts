import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Techniquelesson } from '../entities/Techniquelesson.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class TechniquelessonRepository extends BaseRepository<Techniquelesson> {
  constructor(private dataSource: DataSource) {
    super(Techniquelesson, dataSource.createEntityManager());
  }
}
