import { Injectable } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Targetpositionmove } from './entities/targetpositionmove.entity';
import { TargetpositionmoveRepository } from './repositories/targetpositionmove.repository';

export interface ObjectLiteral {
  [key: string]: any;
}

class BaseService {
  constructor(private entityRepository) {
    this.entityRepository = entityRepository;
  }
}

@Injectable()
export class TargetpositionmoveService extends BaseService {
  constructor(private targetpositionmoveRepository: TargetpositionmoveRepository) {
    super(targetpositionmoveRepository);
  }

  async findAll(query: any): Promise<Pagination<Targetpositionmove>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.targetpositionmoveRepository.paginate(
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

  async findOne(idtargetpositionmove: number) {
    return await this.targetpositionmoveRepository.findOne({ where: { idtargetpositionmove } });
  }
}
