import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { booksModule } from './books/books.module';
import { bottlesModule } from './bottles/bottles.module';

@Module({
  imports: [
    booksModule,
    bottlesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
