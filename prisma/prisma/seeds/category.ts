import { PrismaClient } from "@prisma/client"
import { Random } from "mockjs";
import { create } from "../helper";

const prisma = new PrismaClient();

export async function category() {
  await create(10, async (prisma: PrismaClient) => {
       await prisma.category.create({
            data: {
                title: Random.ctitle()
            }
        })
    })
}