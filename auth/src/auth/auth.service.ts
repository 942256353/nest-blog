import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import registerDto from './dto/register.dto';
import { hash,verify } from 'argon2' //md5 bcriptjs
import loginDto from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }
    async register(dto: registerDto) {
        const password =await hash(dto.password)
        const user =await this.prisma.user.create({
            data:{
                name:dto.name,
                password:password
            }
        })
        // const user = await this.prisma.user.findUnique({
        //     where: {
        //         id: 1
        //     }
        // })
        delete user.password;
        return user;
    }
    async login(dto: loginDto) {
        const user = await this.prisma.user.findFirst({
            where:{
                name:dto.name
            }
        })
        //校对密码 
        if(!(await verify(user.password,dto.password))){
            throw new BadRequestException('密码输入错误')
        }
        delete user.password;
        return user;
    }
}
