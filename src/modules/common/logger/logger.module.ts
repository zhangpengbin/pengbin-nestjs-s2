/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 10:21:12
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:25:11
 */
import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({})
export class LoggerModule {
    static register(): DynamicModule {
        return {
            module: LoggerModule,
            providers: [LoggerService],
            exports: [LoggerService]
        }
    }
}
