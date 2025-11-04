import { Module } from '@nestjs/common';
import { AuthorsService } from './Authors.service';
import { AuthorsController } from './Authors.controller';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
