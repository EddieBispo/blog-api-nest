import { Module } from '@nestjs/common';
import { PostsService } from './Posts.service';
import { PostsController } from './Posts.controller';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
