import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TechniquelessonRepository } from './repositories/techniquelesson.repository';
import { TechniquelessonService } from './techniquelesson.service';
import { TechniquelessonController } from './techniquelesson.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [TechniquelessonController],
  providers: [
    TechniquelessonService, TechniquelessonRepository
  ],
  exports: [TechniquelessonService]
})

export class TechniquelessonModule { }