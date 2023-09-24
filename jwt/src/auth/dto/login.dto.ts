import {IsNotEmpty} from "class-validator"
import {PartialType} from '@nestjs/mapped-types'
import registerDto from "./register.dto"

export default class loginDto extends PartialType(registerDto){
    // @IsNotEmpty({message:'用户名不能为空'})
    // name:string
    // @IsNotEmpty({message:'密码不能为空'})
    // password:string
    // @IsNotEmpty({message:'确认密码不能为空'})
    // passwords_confirm:string
}