import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
// import { JwtPayload } from 'src/_shared/interfaces';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, // private jwtService: JwtService,
  ) {}

  async validateUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.usersService.findOne(loginUserDto.username);
    // const chekPass = await this.usersService.validateHashedPassword(
    //   loginUserDto.username,
    //   loginUserDto.password,
    // );

    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (loginUserDto.password === user.password) {
      return user;
    }
  }
  // async validateUserByJwt(payload: JwtPayload) {
  //   const user = await this.usersService.findOne(payload.username);
  //   if (user) {
  //     return this.createJwtPayload(user);
  //   } else {
  //     throw new UnauthorizedException();
  //   }
  // }
  // async createJwtPayload(user) {
  //   const data: JwtPayload = {
  //     username: user.username,
  //   };
  //   const jwt = this.jwtService.sign(data);
  //   return {
  //     expiresIn: 3600,
  //     token: jwt,
  //   };
  // }
}
