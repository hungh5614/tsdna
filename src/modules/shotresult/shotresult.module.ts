import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ShotresultRepository } from './repositories/shotresult.repository';
import { ShotresultService } from './shotresult.service';
import { ShotresultController } from './shotresult.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [ShotresultController],
  providers: [
    ShotresultService, ShotresultRepository
  ],
  exports: [ShotresultService]
})

export class ShotresultModule { }