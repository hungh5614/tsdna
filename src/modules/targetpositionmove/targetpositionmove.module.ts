import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TargetpositionmoveRepository } from './repositories/targetpositionmove.repository';
import { TargetpositionmoveService } from './targetpositionmove.service';
import { TargetpositionmoveController } from './targetpositionmove.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [TargetpositionmoveController],
  providers: [
    TargetpositionmoveService, TargetpositionmoveRepository
  ],
  exports: [TargetpositionmoveService]
})

export class TargetpositionmoveModule { }