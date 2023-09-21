
import { Random } from "mockjs";
import { create } from "../helper";
import { PrismaClient } from "@prisma/client";

export function user(){
        create(30,async(prisma:PrismaClient)=>{
            await prisma.user.create({
                data: {
                    email: Random.email(),
                    password: 'admin@q2',
                    github: Random.url(),
                    avatar: Random.image('200x200'),
                }
            })
        })
        
    
}