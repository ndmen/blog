import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from 'src/_shared/interfaces';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'thisismykickasssecretthatiwilltotallychangelater',
    });
  }
  // async validate(payload: JwtPayload) {
  //   const user = await this.authService.validateUserByJwt(payload);
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
}
