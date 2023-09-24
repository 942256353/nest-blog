import {IsNotEmpty, Validate} from "class-validator"
import {PartialType} from '@nestjs/mapped-types'
import registerDto from "./register.dto"
import { IsNotExist } from "src/rules/is-not-exist.rule"

export default class loginDto extends PartialType(registerDto){
    @IsNotEmpty({message: '用户名不能为空'})
    // @Validate(IsNotExist,['user'],{message:'用户名不存在阿萨大'}) //自定义类写法
    @IsNotExist('user',{message:'用户名不存在'}) //自定义装饰器写法
    name:string
}