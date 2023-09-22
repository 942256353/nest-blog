import {IsNotEmpty,Length} from "class-validator";
export default class CreateArticleDto{
    @IsNotEmpty({message:'标题不能为空'})
    @Length(10,30,{message:'标题长度为10-300'})
    title:string;
    @IsNotEmpty({message:'内容不能为空'})
    content:string;
}