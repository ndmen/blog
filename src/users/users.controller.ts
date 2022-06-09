import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  //   @Get()
  //   async findAll() {
  //     return this.usersService.findAll();
  //   }

  @Get(':login')
  async findOne(@Param('login') login: string) {
    return this.usersService.findOne(login);
  }
}
