/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 00:32:33
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 00:34:22
 */

 import {Injectable} from '@nestjs/common';

 @Injectable()
 export class LoggerService {
     log(message : string) {
        console.log(message);
     }
 }

