import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import registerDto from './dto/register.dto';
import loginDto from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly auth: AuthService){}
    @Post('register')
    register(@Body() dot:registerDto){
        return this.auth.register(dot);
    }
    @Post('login')
    login(@Body() dot:loginDto){
        return this.auth.login(dot);
    }
}
