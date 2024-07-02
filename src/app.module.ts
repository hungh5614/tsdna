import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/User.module';
import { DatabaseModule } from './database/database.module';
import { FileModule } from './modules/file/file.module';
import { WeaponModule } from './modules/weapon/Weapon.module';
import { BasictechniquelessonModule } from './modules/basictechniquelesson/Basictechniquelesson.module';
import { GunModule } from './modules/gun/Gun.module';
import { TechniquelessonModule } from './modules/techniquelesson/Techniquelesson.module';
import { LaserModule } from './modules/laser/Laser.module';
import { BulletModule } from './modules/bullet/Bullet.module';
import { WeatherModule } from './modules/weather/Weather.module';
import { TsvresultModule } from './modules/tsvresult/Tsvresult.module';
import { ScenarioModule } from './modules/cenario/Cenario.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    FileModule,
    WeaponModule,
    BasictechniquelessonModule,
    GunModule,
    TechniquelessonModule,
    BulletModule,
    LaserModule,
    WeatherModule,
    TsvresultModule,
    ScenarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
