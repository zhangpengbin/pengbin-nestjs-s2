/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 10:21:12
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:33:11
 */
import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({})
export class LoggerModule {
    static register(prefix: string): DynamicModule {
        return {
            module: LoggerModule,
            providers: [LoggerService, {
                provide: 'PREFIX',
                useValue: prefix,
            }],
            exports: [LoggerService],
        }
    }
}
