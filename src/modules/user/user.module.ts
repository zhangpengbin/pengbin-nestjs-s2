/*
 * @Description: 
 * @Version: 1.0
 * @Author: Pengbin Zhang
 * @Date: 2020-04-13 01:18:45
 * @LastEditors: Pengbin Zhang
 * @LastEditTime: 2020-04-13 10:47:27
 */
import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CoreModule } from '../common/core/core.module';
import { AuthModule } from '../auth/auth.module';

// forwardRef : 解决模块间彼此循环依赖的问题
@Module({
  imports:[forwardRef(() => UserModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
