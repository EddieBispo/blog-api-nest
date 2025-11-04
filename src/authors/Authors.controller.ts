import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { AuthorsService } from './Authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() data: any) {
    return this.authorsService.create(data);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.authorsService.update(Number(id), data);
  }
}
