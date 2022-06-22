import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty()
  @MaxLength(32)
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  firsname: string;

  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsString()
  bio: string;

  @IsString()
  passwordSalt: null;
}
