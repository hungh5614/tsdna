import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TargetcoverinlessonRepository } from './repositories/targetcoverinlesson.repository';
import { TargetcoverinlessonService } from './targetcoverinlesson.service';
import { TargetcoverinlessonController } from './targetcoverinlesson.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [TargetcoverinlessonController],
  providers: [
    TargetcoverinlessonService, TargetcoverinlessonRepository
  ],
  exports: [TargetcoverinlessonService]
})

export class TargetcoverinlessonModule { }