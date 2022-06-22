import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto {
  @ApiProperty()
  @IsString()
  post_id: string;

  @ApiProperty()
  @IsString()
  comment: string;

  @ApiProperty()
  @IsString()
  author: string;
}
