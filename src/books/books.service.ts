import { Injectable } from "@nestjs/common"


@Injectable()
export class booksService {

    getBook(): string {
        return 'take book'
    }

    saveBook(data) {
        console.log(data, 'Here...')

        return data;
    }
}