import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TsvresultService } from './Tsvresult.service';
import { TsvresultRepository } from './repositories/Tsvresult.repository';
import { TsvresultController } from './Tsvresult.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [TsvresultController],
  providers: [
    TsvresultService, TsvresultRepository
  ],
  exports: [TsvresultService]
})

export class TsvresultModule { }