import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SceneRepository } from './repositories/scene.repository';
import { SceneService } from './scene.service';
import { SceneController } from './calibgun.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [SceneController],
  providers: [SceneService, SceneRepository],
  exports: [SceneService],
})
export class SceneModule {}
