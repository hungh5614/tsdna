import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Scene } from '../entities/scene.entity';
import { BaseRepository } from 'src/utilities/base.repository';

@Injectable()
export class SceneRepository extends BaseRepository<Scene> {
  constructor(private dataSource: DataSource) {
    super(Scene, dataSource.createEntityManager());
  }
}
