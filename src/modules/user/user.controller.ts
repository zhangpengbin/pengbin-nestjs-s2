/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:20:22
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:10:14
 */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from '../common/logger/logger.service';

@Controller('user')
export class UserController {
    constructor(private readonly userSevice: UserService, private readonly logger: LoggerService) {}
    
    @Get('profile')
    getUser(){

        this.logger.log('UserController getUser');
        return this.userSevice.getUser();
    }
}
