import { Controller, Get } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Controller('article')
export class ArticleController {
    constructor(private readonly config: ConfigService){

    }
    @Get()
    index(){
        return 'article index=>'+this.config.get('app.name');
    }
}
