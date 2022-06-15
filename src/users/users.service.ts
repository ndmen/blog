import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    // createUserDto.password = await this.hashPassword(createUserDto.password);
    const createOne = await this.usersRepository.createOne(createUserDto);
    return createOne;
  }

  async findOne(username): Promise<any> {
    return this.usersRepository.findOne(username);
  }

  // async hashPassword(password): Promise<any> {
  //   const salt = await bcrypt.genSalt(12);
  //   const hash = await bcrypt.hash(password, salt);
  //   return hash;
  // }

  // async validateHashedPassword(username, password) {
  //   const user = await this.usersRepository.findOne({ username: username });
  //   if (user) {
  //     const hash = user.hashedPassword;
  //     const isMatch = await bcrypt.compare(user.password, hash);
  //     return isMatch;
  //   } else return false;
  // }
}
