/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 00:04:00
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 01:00:16
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  // 访问修饰符  private readonly
  constructor(private readonly appService: AppService, @Inject('DEMO_FACTORY') demo:string) {
    console.log(demo);
  }

  // 拆开写法
  // private readonly appService : AppService;

  // constructor(appService : AppService) {
  //   this.appService = appService;
  // }

  

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
