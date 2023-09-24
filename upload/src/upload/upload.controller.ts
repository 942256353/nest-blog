import { Controller, Get, MethodNotAllowedException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransformInterceptor } from 'src/TransformInterceptor';
import { Upload, fileFilter,ImageUpload,DocumentUpload,MarkdownUpload,fileUpload} from './decorator/upload.decortor';

@Controller('upload')
@UseInterceptors(new TransformInterceptor())
export class UploadController {
    @Post('image')
    // @UseInterceptors(FileInterceptor('file',{
    //     limits: {fileSize:Math.pow(2024,2)*2},
    //     fileFilter(req: any, file:Express.Multer.File,callback:(error: Error | null, acceptFile: boolean)=>void){
    //         console.log(file.mimetype)
    //         if(!file.mimetype.includes('image')){
    //             callback(new MethodNotAllowedException('文件类型错误'),false)
    //         }else{
    //             callback(null,true)
    //         }
    //     }
    // }))
    // @Upload('file', { 
    //    limits: {fileSize:Math.pow(1024,2)*2},
    //    fileFilter: fileFilter('image')
    //  })
    @ImageUpload()
    image(@UploadedFile() file: Express.Multer.File) {
        return file
    }

    @Post('document')
    @DocumentUpload()
    doucument(@UploadedFile() file: Express.Multer.File) {
        return file
    }

    @Post('markdown')
    @MarkdownUpload('markdown')
    markdown(@UploadedFile() file: Express.Multer.File) {
        return file
    }

    @Post('file')
    @fileUpload('file',['image','markdown'])
    file(@UploadedFile() file: Express.Multer.File) {
        return file
    }

}
