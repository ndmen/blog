import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username, password): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (password === user.password) {
      return user;
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.validateUser(
      loginUserDto.username,
      loginUserDto.password,
    );
    if (user) {
      const payload = {
        username: user.username,
        sub: user._id,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }

  async register(registerUserDto: RegisterUserDto) {
    const user = await this.usersService.findOne(registerUserDto.username);
    if (user) {
      throw new HttpException(
        'User with this username exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const createOne = await this.usersService.createOne(registerUserDto);

    if (createOne) {
      const payload = {
        username: createOne.username,
        sub: createOne._id,
      };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }
}
