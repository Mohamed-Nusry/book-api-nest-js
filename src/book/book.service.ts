import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    getData(): string {
        return "Here";
    }
}
