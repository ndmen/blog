import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @MaxLength(32)
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @IsString()
  passwordSalt: null;
}
