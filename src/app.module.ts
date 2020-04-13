import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [UserModule, AuthModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
