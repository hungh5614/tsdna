import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CalibgunRepository } from './repositories/calibgun.repository';
import { CalibgunService } from './calibgun.service';
import { CalibgunController } from './calibgun.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [CalibgunController],
  providers: [
    CalibgunService, CalibgunRepository
  ],
  exports: [CalibgunService]
})

export class CalibgunModule { }