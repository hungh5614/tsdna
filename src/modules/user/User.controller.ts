import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './User.service';
import { Pagination } from 'src/utilities/base.interface';
import { User } from './entities/User.entity';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<User>> {
    return await this.userService.findAll(query);
  }


  @Post('/login')
  async sigin(@Body() dto: User) {
    return await this.userService.sigin(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }
  
}
