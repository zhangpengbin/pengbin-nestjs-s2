/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:18:45
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:13:39
 */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CoreModule } from '../common/core/core.module';

@Module({
  imports:[CoreModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
