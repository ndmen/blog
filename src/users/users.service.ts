import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

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
    const createOne = await this.usersRepository.createOne(createUserDto);
    return createOne;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async encryptPassword(password: string) {
    const iv = randomBytes(16);
    const salt = 'salt';

    const key = (await promisify(scrypt)(password, salt, 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const textToEncrypt = 'Nest';
    const encryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);

    console.log(encryptedText);
  }

  // async decryptPassword(password: string) {
  //   const iv = randomBytes(16);
  //   const salt = 'salt';

  //   const key = (await promisify(scrypt)(password, salt, 32)) as Buffer;

  //   const decipher = createDecipheriv('aes-256-ctr', key, iv);
  //   const decryptedText = Buffer.concat([
  //     decipher.update(encryptedText),
  //     decipher.final(),
  //   ]);

  //   console.log(decryptedText);
  // }
}
