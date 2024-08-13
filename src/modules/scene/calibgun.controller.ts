import { Controller, Get, Param, Query } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { SceneService } from './scene.service';
import { Scene } from './entities/scene.entity';

@Controller('api/scene')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Scene>> {
    return await this.sceneService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Scene> {
    return await this.sceneService.findOne(id);
  }
}
