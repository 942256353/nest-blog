import { PrismaClient } from "@prisma/client"
import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { HdPipe } from "./hd.pipe";
import CreateArticleDto from "./dto/article.create.dto";

@Controller()
// @UsePipes(ParseIntPipe)
export class AppController {
  prisma: PrismaClient;
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient();
  }

  @Get()
  // @UsePipes(ParseIntPipe)
  getHello(@Param('id', new DefaultValuePipe(1), ParseIntPipe) id: number) {
    return this.prisma.article.findUnique({
      where: {
        id
      }
    })
    // return id;
  }

  @Post('store')
  async add(@Body(HdPipe) dto: CreateArticleDto) {
    const article =await this.prisma.article.create({
      data: {
        title: dto.title,
        content: dto.content
      }
    })
    console.log(article)
  }
}
