import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Render,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { Roles } from 'src/_decorators/roles.decorator';
// import { Role } from 'src/_shared/interfaces';
import { RolesGuard } from 'src/_guards/roles.guards';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.User)
  @Post()
  @Render('create-post')
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  @Render('index')
  async findAll() {
    return this.postsService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  @Render('post')
  async findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
