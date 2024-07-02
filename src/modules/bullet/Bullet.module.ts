import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BulletController } from './Bullet.controller';
import { BulletService } from './Bullet.service';
import { BulletRepository } from './repositories/Bullet.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [BulletController],
  providers: [BulletService, BulletRepository],
  exports: [BulletService],
})
export class BulletModule {}
