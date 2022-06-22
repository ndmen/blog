import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findOne(username): Promise<any> {
    return this.usersRepository.findOne(username);
  }

  async findOneById(id): Promise<any> {
    const findOneById = await this.usersRepository.findOneById(id);
    return { user: findOneById };
  }

  async createOne(user): Promise<any> {
    const createOne = await this.usersRepository.createOne(user);
    return createOne;
  }
}
