import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';

@Controller()
export class AuthController {
    constructor(private readonly auth:AuthService){

    }
    @Post('register')
    register(@Body() dot:RegisterDto){
        return this.auth.register(dot);
    }

    @Post('login')
    login(@Body() dot:LoginDto){
        return this.auth.login(dot);
    }
}
