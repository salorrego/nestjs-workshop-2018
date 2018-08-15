import { Controller, Get, Query } from '@nestjs/common';
import { BookService } from '../services/book.service';

@Controller('api/v1/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('')
  public list(@Query('author') author?: string) {
    const conditions: any = {};
    if (author) {
      conditions.author = author;
    }
    return this.bookService.find(conditions);
  }
}
