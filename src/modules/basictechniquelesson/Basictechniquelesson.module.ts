import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BasictechniquelessonRepository } from './repositories/Basictechniquelesson.repository';
import { BasictechniquelessonService } from './Basictechniquelesson.service';
import { BasictechniquelessonController } from './Basictechniquelesson.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [BasictechniquelessonController],
  providers: [
    BasictechniquelessonService, BasictechniquelessonRepository
  ],
  exports: [BasictechniquelessonService]
})

export class BasictechniquelessonModule { }