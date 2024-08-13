import { Injectable } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Scene } from './entities/scene.entity';
import { SceneRepository } from './repositories/scene.repository';

export interface ObjectLiteral {
  [key: string]: any;
}

class BaseService {
  constructor(private entityRepository) {
    this.entityRepository = entityRepository;
  }
}

@Injectable()
export class SceneService extends BaseService {
  constructor(private sceneRepository: SceneRepository) {
    super(sceneRepository);
  }

  async findAll(query: any): Promise<Pagination<Scene>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.sceneRepository.paginate('b', limit, page);

    if (sortBy) {
      let order: 'ASC' | 'DESC' = 'ASC';
      if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
        order = 'DESC';
      }
      queryBuilder.orderBy(`b.${sortBy}`, order);
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

  async findOne(IdScene: number) {
    return await this.sceneRepository.findOne({ where: { IdScene } });
  }
}
