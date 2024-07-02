import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ScenarioController } from './Cenario.controller';
import { ScenarioService } from './Cenario.service';
import { ScenarioRepository } from './repositories/Cenario.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ScenarioRepository],
  exports: [ScenarioService],
})
export class ScenarioModule {}
