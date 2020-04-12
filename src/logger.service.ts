/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 00:32:33
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 01:12:05
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {

    constructor() {
        console.log('LoggerService Init');
    }
    
    log(message: string) {
        console.log(message);
    }
}

