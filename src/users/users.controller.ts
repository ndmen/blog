import { Controller, Get, Param, Render } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @Render('user')
  async findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }
}
