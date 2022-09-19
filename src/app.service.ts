import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  constructor() {
    console.log('constructor');
    this.getHello();
  }
  onModuleInit() {
    console.log('onmoduleinit');
    throw new Error('error not handled');
  }
  getHello() {
    // throw new Error('error handled');
  }
}
