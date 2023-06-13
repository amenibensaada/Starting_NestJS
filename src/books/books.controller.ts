import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  private readonly books: Book[] = [];

  @Get()
  findAll(): Book[] {
    return this.books;
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto): void {
    this.books.push(createBookDto);
  }
}
