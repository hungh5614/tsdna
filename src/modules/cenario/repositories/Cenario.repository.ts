import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/utilities/base.repository';
import { Scenario } from '../entities/cenario.entity';

@Injectable()
export class ScenarioRepository extends BaseRepository<Scenario> {
  constructor(private dataSource: DataSource) {
    super(Scenario, dataSource.createEntityManager());
  }
}
