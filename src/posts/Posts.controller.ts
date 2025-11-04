import { Controller, Get, Post, Put, Query, Param, Body } from '@nestjs/common';
import { PostsService } from './Posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() data: any) {
    return this.postsService.create(data);
  }

  @Get()
  findAll(
    @Query('authorId') authorId?: string,
    @Query('date') date?: string,
  ) {
    return this.postsService.findAll({
      authorId: authorId ? Number(authorId) : undefined,
      date,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.postsService.update(Number(id), data);
  }
}
