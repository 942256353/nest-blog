import { Module, ParseIntPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService,
  //   {
  //   provide:APP_PIPE,
  //   useClass:ParseIntPipe
  // }
],
  imports: [AuthModule],
})
export class AppModule {}
