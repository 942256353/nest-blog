import { MethodNotAllowedException, UseInterceptors, applyDecorators } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";

export function fileFilter(type:string[]) {
    return (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
        const check = type.some(t =>file.mimetype.includes(t));
        if (!check) {
            callback(new MethodNotAllowedException('文件类型错误'), false)
        } else {
            callback(null, true)
        }


    }
}

export function upload(field: string = 'file', options?: MulterOptions) {
    return applyDecorators(
        UseInterceptors(FileInterceptor(field, options))
    )
}

//图片上传
export function image(field='file'){
   return upload(field,{
        limits:{fieldSize:Math.pow(2,2)*3},
        fileFilter:fileFilter(['image'])
    })
}

//文档上传
export function document(field='file'){
    return upload(field,{
         limits:{fieldSize:Math.pow(2,2)*3},
         fileFilter:fileFilter(['document'])
     })
 }

 //md类型文件上传
 export function markdown(field='file'){
    return upload(field,{
         limits:{fieldSize:Math.pow(2,2)*3},
         fileFilter:fileFilter(['markdown'])
     })
 }

 //文件上传
 export function file(field='file',type:string[]=['image']){
    return upload(field,{
         limits:{fieldSize:Math.pow(2,2)*3},
         fileFilter:fileFilter(type)
     })
 }
