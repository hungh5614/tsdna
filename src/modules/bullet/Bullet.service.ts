import { Injectable, Inject } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Bullet } from './entities/bullet.entity';
import { BulletRepository } from './repositories/Bullet.repository';

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
export class BulletService extends BaseService {
  constructor(private bulletRepository: BulletRepository) {
    super(bulletRepository);
  }

  async findAll(query: any): Promise<any> {
    const {
      page = 1,
      limit = 10,
      sortBy,
      sortOrder,
      idWeapon
    } = query;
    const queryBuilder = await this.bulletRepository.paginate('g', limit, page);

    if (idWeapon) queryBuilder.andWhere(`g.idWeapon = :idWeapon`, { idWeapon });

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
}
