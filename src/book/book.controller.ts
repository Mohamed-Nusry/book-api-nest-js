import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) {}

    @Get()
    getAll(): string {
        return this.bookService.getData();
    }
}
