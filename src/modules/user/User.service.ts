import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { UserRepository } from './repositories/User.repository';
import { Pagination } from 'src/utilities/base.interface';
import { User } from './entities/User.entity';

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
export class UserService extends BaseService {
  constructor(private userRepository: UserRepository) {
    super(userRepository);
  }

  async findAll(query: any): Promise<Pagination<User>> {
    const { page = 1, limit = 10, sortBy, sortOrder, keyword } = query;
    const queryBuilder = await this.userRepository.paginate(
      'u',
      limit,
      page,
    );

    if (keyword) {
      queryBuilder.andWhere('(u.UserName LIKE :keyword) or (u.FullName LIKE :keyword)', {
        keyword: `%${keyword}%`,
      });
    }

    if (sortBy) {
      let order: 'ASC' | 'DESC' = 'ASC';
      if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
        order = 'DESC';
      }
      queryBuilder.orderBy(`user.${sortBy}`, order);
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
 

  async sigin(user: User) {
    if(!user.UserName || !user.Password) {
      throw new HttpException('Vui lòng nhập tài khoản hoặc mật khẩu', HttpStatus.BAD_REQUEST);
    }
    return await this.userRepository.findOneBy({ UserName: user.UserName, IdRoles: 1 });
  }
}
