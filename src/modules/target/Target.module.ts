import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TargetController } from './Target.controller';
import { TargetService } from './Target.service';
import { TargetRepository } from './repositories/Target.repository';
@Module({
  imports: [DatabaseModule],
  controllers: [TargetController],
  providers: [
    TargetService, TargetRepository
  ],
  exports: [TargetService]
})

export class TargetModule { }