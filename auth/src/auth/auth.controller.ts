import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import registerDto from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly auth: AuthService){}
    @Post('register')
    register(@Body() dot:registerDto){
        return this.auth.register(dot);
    }

}
