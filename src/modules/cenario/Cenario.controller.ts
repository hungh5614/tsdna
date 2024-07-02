import {
  Body,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { ScenarioService } from './Cenario.service';
import { Scenario } from './entities/cenario.entity';
import { SaveCenarioDTO } from './dto/save-cenario.dto';

@Controller('api/scenario')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @Get()
  async findAll(@Query() query): Promise<Pagination<Scenario>> {
    return await this.scenarioService.findAll(query);
  }

  @Post()
  async save(@Body() dto: SaveCenarioDTO) {
    return await this.scenarioService.save(dto);
  }
}
