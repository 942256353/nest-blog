import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService, ConfigType } from '@nestjs/config';
import databaseConfig from './config/database.config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly config: ConfigService,
    @Inject(databaseConfig.KEY) private database: ConfigType<typeof databaseConfig>) {}

  @Get()
  getHello(): string {
    // type getType<T extends ()=>any> = T extends ()=>infer U?U:T;
    // type f=typeof databaseConfig;
    // type databaseType = getType<f>
    //  return (this.database as databaseType).host;
    return this.database.passsword;
  }
}
