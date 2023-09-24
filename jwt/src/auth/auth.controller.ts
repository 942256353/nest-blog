import { Body, Controller, Get, Post } from '@nestjs/common';
import { user as userType } from '@prisma/client';
import { AuthService } from './auth.service';
import { Auth } from './decorator/auth.decorator';
import { User } from './decorator/user.decorator';
import loginDto from './dto/login.dto';
import registerDto from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private auth:AuthService){
       
    }
    @Post('register')
    register(@Body() dto:registerDto){
        return this.auth.register(dto);
    }
    @Post('login')
    login(@Body() dto:loginDto){
        return this.auth.login(dto);
    }
    @Get('all')
    @Auth()
    all(@User() user:userType){
    //  return user
      return this.auth.getAll();
    }
}
