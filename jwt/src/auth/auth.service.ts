import { BadRequestException, Injectable } from '@nestjs/common';
import registerDto from './dto/register.dto';
import { PrismaService } from '../primsa/prisma.service';
import {hash,verify} from 'argon2'
import { user } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import loginDto from './dto/login.dto';

@Injectable()
export class AuthService {
 constructor(private primsa:PrismaService,private jwt:JwtService){
}
 async register(dto:registerDto){
    const user = await this.primsa.user.create({
        data:{
            name:dto.name,
            password:await hash(dto.password)
        }
    })
    return this.token(user);
  }

  async token({id,name}:user){
    return{
        token: await this.jwt.signAsync({sub:id,name})
    }
  }

  async login(dto:loginDto){
    const user = await this.primsa.user.findUnique({
        where:{
            name:dto.name
        }
    })
    if(!(await verify(user.password,dto.password))){
        throw new BadRequestException('密码输入错误')
    }
    return this.token(user);
  }

  async getAll(){
    return await this.primsa.user.findMany()
  }
}
