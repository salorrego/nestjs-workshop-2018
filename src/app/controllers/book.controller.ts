import { Controller, Get } from '@nestjs/common';
import { BookService } from '../services/book.service';

@Controller('api/v1/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('')
  public list() {
    return this.bookService.find({});
  }
}
