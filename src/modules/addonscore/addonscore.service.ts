import { Injectable } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Addonscore } from './entities/Addonscore.entity';
import { AddonscoreRepository } from './repositories/Addonscore.repository';

export interface ObjectLiteral {
  [key: string]: any;
}

class BaseService {
  constructor(private entityRepository) {
    this.entityRepository = entityRepository;
  }
}

@Injectable()
export class AddonscoreService extends BaseService {
  constructor(private addonscoreRepository: AddonscoreRepository) {
    super(addonscoreRepository);
  }

  async findAll(query: any): Promise<Pagination<Addonscore>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.addonscoreRepository.paginate(
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

  async findOne(idaddonscore: number) {
    return await this.addonscoreRepository.findOne({ where: { idaddonscore } });
  }
}
