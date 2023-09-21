import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

// @Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static forRoot(options:{path:string}):DynamicModule{
    console.log(options)
    return {
      global: true,
      module: ConfigModule,
      providers:[
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options
        }
      ]
    }
  }
}
