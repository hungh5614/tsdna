import { Injectable } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Calibgun } from './entities/calibgun.entity';
import { CalibgunRepository } from './repositories/calibgun.repository';

export interface ObjectLiteral {
  [key: string]: any;
}

class BaseService {
  constructor(private entityRepository) {
    this.entityRepository = entityRepository;
  }
}

@Injectable()
export class CalibgunService extends BaseService {
  constructor(private calibgunRepository: CalibgunRepository) {
    super(calibgunRepository);
  }

  async findAll(query: any): Promise<Pagination<Calibgun>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.calibgunRepository.paginate(
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

  async findOne(idcalibGun: number) {
    return await this.calibgunRepository.findOne({ where: { idcalibGun } });
  }
}
