/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:20:43
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 11:10:12
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getUser() {
        return "Pengbin.";
    }
}
