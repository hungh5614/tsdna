import { Injectable, Inject } from '@nestjs/common';
import { Pagination } from 'src/utilities/base.interface';
import { Videointeractivelesson } from './entities/Videointeractivelesson.entity';
import { VideointeractivelessonRepository } from './repositories/Videointeractivelesson.repository';

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
export class VideointeractivelessonService extends BaseService {
  constructor(private videointeractivelessonRepository: VideointeractivelessonRepository) {
    super(videointeractivelessonRepository);
  }


  async findAll(query: any): Promise<Pagination<Videointeractivelesson>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.videointeractivelessonRepository.paginate(
      'b',
      limit,
      page,
    );

    if(keyword){
      queryBuilder.andWhere(`b.Name LIKE :keyword`, { keyword: `%${keyword}%` });
    }

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
