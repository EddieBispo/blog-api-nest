import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/Prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.author.create({ data });
  }

  findAll() {
    return this.prisma.author.findMany({ include: { user: true, posts: true } });
  }

  update(id: number, data: any) {
    return this.prisma.author.update({
      where: { id },
      data,
    });
  }
}
