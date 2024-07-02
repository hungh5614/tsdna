import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/utilities/base.repository';
import { Tsvresult } from '../entities/Tsvresult.entity';

@Injectable()
export class TsvresultRepository extends BaseRepository<Tsvresult> {
  constructor(private dataSource: DataSource) {
    super(Tsvresult, dataSource.createEntityManager());
  }
}
