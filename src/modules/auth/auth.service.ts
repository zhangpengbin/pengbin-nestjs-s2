/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:27:12
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 01:30:32
 */
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly useService: UserService){
        console.log(this.useService.getUser());
    }
}
