import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  static getHello(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }

  sayBye(): string {
    return "Bye Rahim";
  }
}
