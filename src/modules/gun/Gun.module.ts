import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { GunController } from './Gun.controller';
import { GunService } from './Gun.service';
import { GunRepository } from './repositories/Gun.repository';
@Module({
  imports: [DatabaseModule],
  controllers: [GunController],
  providers: [
    GunService, GunRepository
  ],
  exports: [GunService]
})

export class GunModule { }