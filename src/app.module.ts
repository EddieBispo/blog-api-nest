import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma/Prisma.module';
import { UsersModule } from './users/Users.module';
import { AuthorsModule } from './authors/Authors.module';
import { PostsModule } from './posts/Posts.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthorsModule, PostsModule],
})
export class AppModule {}
