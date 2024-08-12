import { Injectable, Inject } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Target } from './entities/target.entity';
import { TargetRepository } from './repositories/Target.repository';

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
export class TargetService extends BaseService {
  constructor(private targetRepository: TargetRepository) {
    super(targetRepository);
  }

  async findAll(query: any): Promise<Pagination<Target>> {
    const {
      page = 1,
      limit = 10,
      sortBy,
      sortOrder,
      keyword,
      typeWeapon,
    } = query;
    const queryBuilder = await this.targetRepository.paginate('g', limit, page);

    if (typeWeapon) {
      queryBuilder.andWhere('g.typeWeapon = :typeWeapon', {
        typeWeapon,
      });
    }

    if (sortBy) {
      let order: 'ASC' | 'DESC' = 'ASC';
      if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
        order = 'DESC';
      }
      queryBuilder.orderBy(`g.${sortBy}`, order);
    }

    queryBuilder.leftJoinAndSelect('g.weapon', 'w');
    queryBuilder.leftJoinAndSelect('g.laser', 'l');
    const [result, total] = await queryBuilder.getManyAndCount();
    return {
      data: result,
      count: total,
      page_size: limit,
      total_pages:
        total % limit === 0 ? total / limit : Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    return await this.targetRepository.findOne({ where: { IdTarget: id }});
  }
}
