import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }
    async register(dto: any) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: 1
            }
        })
        return user;
    }
}
