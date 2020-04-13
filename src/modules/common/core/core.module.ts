/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:33:56
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:08:51
 */
import { Module } from '@nestjs/common';
import { CommonModule } from '../common.module';

@Module({
    imports:[CommonModule],
    exports:[CommonModule]
})
export class CoreModule {}
