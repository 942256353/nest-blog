import { Controller, Post, Req, UploadedFile } from '@nestjs/common';
import { image } from './upload';
import { ConfigService } from '@nestjs/config';

@Controller('upload')
export class UploadController {
    constructor(private config: ConfigService){}
    @Post('image')
    @image()
    image(@UploadedFile() file: Express.Multer.File,@Req() req){
        const serverHostname = this.config.get('SERVER_URL');
        console.log(`${serverHostname}/${file.path}`);
        return {
            url:`${serverHostname}/${file.path}`
        }
    }

}
