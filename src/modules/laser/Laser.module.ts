import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { LaserController } from './Laser.controller';
import { LaserService } from './Laser.service';
import { LaserRepository } from './repositories/Laser.repository';
@Module({
  imports: [DatabaseModule],
  controllers: [LaserController],
  providers: [LaserService, LaserRepository],
  exports: [LaserService],
})
export class LaserModule {}
