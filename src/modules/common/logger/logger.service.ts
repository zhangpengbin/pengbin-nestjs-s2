/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:33:12
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:39:21
 */
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class LoggerService {

    constructor(@Inject('PREFIX') private readonly prefix: string){}
    
    log(message : string){
        console.log(this.prefix, message);
    }
}
