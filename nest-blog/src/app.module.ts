import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DevService } from './dev.service';
import { ConfigService } from './config.service';
import { DbService } from './db.service';
import { HdModule } from './hd/hd.module';
import { TestModule } from './test/test.module';


// console.log(process.env.NODE_ENV)
// const HdService = {
//   provide: 'HdService',
//   useClass: process.env.NODE_ENV==='development'?DevService:AppService
// }

@Module({
  imports: [HdModule, TestModule],
  controllers: [AppController],
  providers: [AppService,ConfigService, {
    provide:'DbService',
    inject:['ConfigService'],
    useFactory:async(configService)=>{
       return new Promise(r=>{
        setTimeout(()=>r('小谢'),1000)
       }) 
        // return new DbService(configService)
    },

  }]
})
export class AppModule { }
