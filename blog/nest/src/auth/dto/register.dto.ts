import {IsNotEmpty} from 'class-validator'
import { IsNotExistsRule } from 'src/common/rules/is-not-exists.rule'

export default class RegisterDto{
    @IsNotEmpty({message:'用户名不能为空'})
    @IsNotExistsRule('user',{message:'用户名已经注册'})
    name:string
    @IsNotEmpty({message:'密码不能为空'})
    password:string
}