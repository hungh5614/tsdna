import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Basictechniquelesson } from '../entities/Basictechniquelesson.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class BasictechniquelessonRepository extends BaseRepository<Basictechniquelesson> {
  constructor(private dataSource: DataSource) {
    super(Basictechniquelesson, dataSource.createEntityManager());
  }
}
