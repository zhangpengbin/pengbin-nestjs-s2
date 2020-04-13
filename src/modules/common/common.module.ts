/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:32:25
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:12:22
 */
import { Module } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { CoreModule } from './core/core.module';

@Module({
  providers: [LoggerService],
  exports:[LoggerService]
})
export class CommonModule {}
