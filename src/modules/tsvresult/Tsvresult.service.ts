import { Injectable } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Tsvresult } from './entities/Tsvresult.entity';
import { TsvresultRepository } from './repositories/Tsvresult.repository';

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
export class TsvresultService extends BaseService {
  constructor(private tsvresultRepository: TsvresultRepository) {
    super(TsvresultRepository);
  }

  async findAll(query: any): Promise<Pagination<Tsvresult>> {
    const { page = 1, limit = 10, sortBy, sortOrder } = query;
    const queryBuilder = await this.tsvresultRepository.paginate(
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

    queryBuilder.leftJoinAndSelect('g.student', 'st');
    queryBuilder.leftJoinAndSelect('g.scenario', 's');
    queryBuilder.leftJoinAndSelect('g.weather', 'w');
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
    return await this.tsvresultRepository.findOne({
      where: { IdTSVResult: id },
      relations: ['student', 'scenario', 'weather'],
    });
  }
}
