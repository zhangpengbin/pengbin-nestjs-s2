/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:20:22
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 01:24:23
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userSevice: UserService) {}
    
    @Get('profile')
    getUser(){
        return this.userSevice.getUser();
    }
}
