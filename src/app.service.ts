import { Injectable, Inject } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class AppService {

  constructor(@Inject('LoggerService') private readonly logger: LoggerService) {}
  getHello(): string {

    this.logger.log("appService : Hello Nestjs");
    return 'Hello World!';
  }
}
