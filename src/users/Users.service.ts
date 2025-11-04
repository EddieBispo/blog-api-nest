import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/Prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.user.create({ data });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  update(id: number, data: any) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async favoritePost(userId: number, postId: number) {
    return this.prisma.favorite.create({
      data: { userId, postId },
    });
  }

  getFavorites(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: { post: true },
    });
  }
}
