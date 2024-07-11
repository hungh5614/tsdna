import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Videointeractivelesson } from '../entities/Videointeractivelesson.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class VideointeractivelessonRepository extends BaseRepository<Videointeractivelesson> {
  constructor(private dataSource: DataSource) {
    super(Videointeractivelesson, dataSource.createEntityManager());
  }
}
