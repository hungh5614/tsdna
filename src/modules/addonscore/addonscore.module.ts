import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AddonscoreRepository } from './repositories/Addonscore.repository';
import { AddonscoreService } from './addonscore.service';
import { AddonscoreController } from './Addonscore.controller';
@Module({
  imports: [DatabaseModule],
  controllers: [AddonscoreController],
  providers: [
    AddonscoreService, AddonscoreRepository
  ],
  exports: [AddonscoreService]
})

export class AddonscoreModule { }