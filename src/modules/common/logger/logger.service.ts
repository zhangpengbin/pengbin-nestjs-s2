/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:33:12
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:07:02
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    log(message : string){
        console.log(message);
    }
}
