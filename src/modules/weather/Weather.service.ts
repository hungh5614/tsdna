import { Injectable, Inject } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Weather } from './entities/weather.entity';
import { WeatherRepository } from './repositories/Weather.repository';

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
export class WeatherService extends BaseService {
  constructor(private weatherRepository: WeatherRepository) {
    super(weatherRepository);
  }

  async findAll(query: any): Promise<Pagination<Weather>> {
    const {
      page = 1,
      limit = 10,
      sortBy,
      sortOrder,
      keyword,
      typeWeapon,
    } = query;
    const queryBuilder = await this.weatherRepository.paginate('g', limit, page);

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
