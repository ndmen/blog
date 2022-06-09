import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const createOne = await this.usersRepository.createOne(createUserDto);
    return createOne;
  }

  async findOne(login) {
    const findOne = await this.usersRepository.findOne(login);
    return findOne;
  }
}
