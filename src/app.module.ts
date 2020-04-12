/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 00:04:00
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 00:54:25
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

// const mockAppService = {
//   getHello() {
//     return "您好";
//   }
// };

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: AppService,
    useClass: AppService
    //useValue: mockAppService,
  }, {
    provide: "LoggerService",
    useClass: LoggerService
  }],
})

// providers 标准写法 
// {
//   provide: LoggerService,
//   useClass: LoggerService,
//   useValue: Value
// }

export class AppModule { }
