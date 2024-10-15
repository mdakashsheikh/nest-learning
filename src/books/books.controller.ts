import { Controller, Get } from "@nestjs/common";
import { booksService } from "./books.service";

@Controller('book')
export class booksController {

    constructor(private readonly booksService:booksService) {}

    @Get('/gether')
    getBook(): string {
        return this.booksService.getBook();
    }
}