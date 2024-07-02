import { Module } from '@nestjs/common';
import { WeaponController } from './Weapon.controller';
import { DatabaseModule } from 'src/database/database.module';
import { WeaponService } from './Weapon.service';
import { WeaponRepository } from './repositories/User.repository';
@Module({
  imports: [DatabaseModule],
  controllers: [WeaponController],
  providers: [
    WeaponService, WeaponRepository
  ],
  exports: [WeaponService]
})

export class WeaponModule { }