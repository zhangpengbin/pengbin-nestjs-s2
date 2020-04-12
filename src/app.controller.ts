/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 00:04:00
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 01:10:33
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './logger.service';

@Controller()
export class AppController {

  // 访问修饰符  private readonly
  constructor(private readonly appService: AppService, private readonly logger: LoggerService) {
  }

  // 拆开写法
  // private readonly appService : AppService;

  // constructor(appService : AppService) {
  //   this.appService = appService;
  // }



  @Get()
  getHello(): string {
    this.logger.log('AppController Get Hello');
    return this.appService.getHello();
  }
}
