import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Render,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  @Render('comment')
  async findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }
}
