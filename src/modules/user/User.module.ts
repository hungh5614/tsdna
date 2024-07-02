import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from './repositories/User.repository';
import { UserService } from './User.service';
@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService, UserRepository
  ],
  exports: [UserService]
})

export class UserModule { }