import { Injectable, Inject } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { ScenarioRepository } from './repositories/Cenario.repository';
import { Scenario } from './entities/cenario.entity';
import { SaveCenarioDTO } from './dto/save-cenario.dto';

export interface ObjectLiteral {
  [key: string]: any;
}

class BaseService {
  constructor(private entityRepository) {
    this.entityRepository = entityRepository;
  }
  async save(data: any) {
    return await this.entityRepository.save(data);
  }
}

@Injectable()
export class ScenarioService extends BaseService {
  constructor(private scenarioRepository: ScenarioRepository) {
    super(scenarioRepository);
  }

  async findAll(query: any): Promise<Pagination<Scenario>> {
    const {
      page = 1,
      limit = 10,
      sortBy,
      sortOrder,
      typeWeapon,
    } = query;
    const queryBuilder = await this.scenarioRepository.paginate(
      'g',
      limit,
      page,
    );

    if (sortBy) {
      let order: 'ASC' | 'DESC' = 'ASC';
      if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
        order = 'DESC';
      }
      queryBuilder.orderBy(`g.${sortBy}`, order);
    }

    const [result, total] = await queryBuilder.getManyAndCount();
    return {
      data: result,
      count: total,
      page_size: limit,
      total_pages:
        total % limit === 0 ? total / limit : Math.ceil(total / limit),
    };
  }


  async save(dto: SaveCenarioDTO) {
    return await this.scenarioRepository.save(dto);
  }
  
}
