import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, BookController],
  providers: [AppService, BookService, UserService],
})
export class AppModule {}
