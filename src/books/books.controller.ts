import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { booksService } from "./books.service";
import { createDto } from "./dtos/create.dto";

@Controller('book')
export class booksController {

    constructor(private readonly booksService:booksService) {}

    @Get('/gether')
    getBook(@Param() id:string): string {
        console.log(id, 'id here')

        return this.booksService.getBook();
    }

    @Post('/save')
    saveBook(@Body() body:createDto) {
        console.log(body)

        return this.booksService.saveBook(body)
    }
}