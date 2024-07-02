import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TechniquelessonRepository } from './repositories/Techniquelesson.repository';
import { TechniquelessonService } from './Techniquelesson.service';
import { TechniquelessonController } from './Techniquelesson.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [TechniquelessonController],
  providers: [
    TechniquelessonService, TechniquelessonRepository
  ],
  exports: [TechniquelessonService]
})

export class TechniquelessonModule { }