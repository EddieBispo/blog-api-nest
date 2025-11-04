import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/Prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.post.create({ data });
  }

  findAll(filters: { authorId?: number; date?: string }) {
    const where: any = {};

    if (filters.authorId) where.authorId = filters.authorId;

    if (filters.date) {
      const date = new Date(filters.date);
      where.publishedAt = {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lt: new Date(date.setHours(23, 59, 59, 999)),
      };
    }

    return this.prisma.post.findMany({
      where,
      include: { author: true },
    });
  }

  update(id: number, data: any) {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }
}
