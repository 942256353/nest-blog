import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ConfigModule} from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../src/primsa/prisma.module';

@Module({
  imports: [AuthModule, PrismaModule,ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
