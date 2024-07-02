import { Injectable, Inject } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Gun } from './entities/gun.entity';
import { GunRepository } from './repositories/Gun.repository';

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
export class GunService extends BaseService {
  constructor(private gunRepository: GunRepository) {
    super(gunRepository);
  }

  async findAll(query: any): Promise<Pagination<Gun>> {
    const {
      page = 1,
      limit = 10,
      sortBy,
      sortOrder,
      keyword,
      typeWeapon,
    } = query;
    const queryBuilder = await this.gunRepository.paginate('g', limit, page);

    if (typeWeapon) {
      queryBuilder.andWhere('g.typeWeapon = :typeWeapon', {
        typeWeapon,
      });
    }

    // if (keyword) {
    //   queryBuilder.andWhere('(user.id LIKE :keyword) or (user.username LIKE :keyword)', {
    //     keyword: `%${keyword}%`,
    //   });
    // }

    if (sortBy) {
      let order: 'ASC' | 'DESC' = 'ASC';
      if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
        order = 'DESC';
      }
      queryBuilder.orderBy(`g.${sortBy}`, order);
    }

    queryBuilder.leftJoinAndSelect('g.weapon', 'w');
    const [result, total] = await queryBuilder.getManyAndCount();
    return {
      data: result,
      count: total,
      page_size: limit,
      total_pages:
        total % limit === 0 ? total / limit : Math.ceil(total / limit),
    };
  }
}
