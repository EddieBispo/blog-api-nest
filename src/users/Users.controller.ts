import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsersService } from './Users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() data: any) {
    return this.usersService.create(data);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.usersService.update(Number(id), data);
  }

  @Post(':id/favorites/:postId')
  favorite(@Param('id') id: string, @Param('postId') postId: string) {
    return this.usersService.favoritePost(Number(id), Number(postId));
  }

  @Get(':id/favorites')
  favorites(@Param('id') id: string) {
    return this.usersService.getFavorites(Number(id));
  }
}
