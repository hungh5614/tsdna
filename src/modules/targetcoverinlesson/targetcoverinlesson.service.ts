import { Injectable } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Targetcoverinlesson } from './entities/targetcoverinlesson.entity';
import { TargetcoverinlessonRepository } from './repositories/targetcoverinlesson.repository';

export interface ObjectLiteral {
  [key: string]: any;
}

class BaseService {
  constructor(private entityRepository) {
    this.entityRepository = entityRepository;
  }
}

@Injectable()
export class TargetcoverinlessonService extends BaseService {
  constructor(private targetcoverinlessonRepository: TargetcoverinlessonRepository) {
    super(targetcoverinlessonRepository);
  }

  async findAll(query: any): Promise<Pagination<Targetcoverinlesson>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.targetcoverinlessonRepository.paginate(
      'b',
      limit,
      page,
    );

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

  async findOne(idtargetcoverinlesson: number) {
    return await this.targetcoverinlessonRepository.findOne({ where: { idtargetcoverinlesson } });
  }
}
