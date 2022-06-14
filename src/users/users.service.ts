import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: 'user',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashPassword(createUserDto.password);
    const createOne = await this.usersRepository.createOne(createUserDto);
    return createOne;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  // async validateHashedPassword(username: string, password: string) {
  //   const user = await this.userModel
  //     .findOne({ login: username })
  //     .select('+password');
  //   if (user) {
  //     const hash = user.hashedPassword;
  //     const isMatch = await bcrypt.compare(password, hash);
  //     return isMatch;
  //   } else return false;
  // }
}
