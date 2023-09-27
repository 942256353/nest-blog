import { Controller, Post, Req, UploadedFile } from '@nestjs/common';
import { image } from './upload';
import { ConfigService } from '@nestjs/config';

let serverHostname = process.env.SYSTEM_MODE_ENV==='development'?'localhost:3000':'http://:43.138.152.177:3000';

@Controller('upload')
export class UploadController {
    constructor(private config: ConfigService){}
    @Post('image')
    @image()
    image(@UploadedFile() file: Express.Multer.File,@Req() req){

        console.log('环境',serverHostname);
        return {
            url:`${serverHostname}/${file.path}`
        }
    }

}
