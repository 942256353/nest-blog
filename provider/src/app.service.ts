import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from './types/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('ConfigService')
    private readonly configService:ConfigType
  ){}
  get(): string {
   return 'app service'+`[${this.configService.url}]`
  }
}
