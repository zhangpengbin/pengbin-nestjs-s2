/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:32:25
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:25:28
 */
import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { CoreModule } from './core/core.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  providers: [LoggerService],
  exports:[LoggerModule],
  imports: [LoggerModule.register()]
})
export class CommonModule {}
