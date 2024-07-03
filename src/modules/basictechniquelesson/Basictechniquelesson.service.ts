import { Injectable, Inject } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Basictechniquelesson } from './entities/Basictechniquelesson.entity';
import { BasictechniquelessonRepository } from './repositories/Basictechniquelesson.repository';

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
export class BasictechniquelessonService extends BaseService {
  constructor(private basictechniquelessonRepository: BasictechniquelessonRepository) {
    super(basictechniquelessonRepository);
  }


  async findAll(query: any): Promise<Pagination<Basictechniquelesson>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.basictechniquelessonRepository.paginate(
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

    queryBuilder.leftJoinAndSelect('b.weapon', 'w');
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
