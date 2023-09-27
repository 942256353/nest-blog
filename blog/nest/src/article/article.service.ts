import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService, private config: ConfigService) {

  }
  create(createArticleDto: CreateArticleDto) {
    console.log('栏目id')
    return this.prisma.article.create({
      data: { ...createArticleDto, categoryId: +createArticleDto.categoryId }
    })
  }

  async findAll(args: Record<string, any>) {
    const row = this.config.get('RTICLE_PAGE_ROW');
    const page = args.page ? +args.page : 1;
    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * row,
      take: +row,
      where: {
        category: args.category ? { id: +args.category } : {},
      },
      include: {
        category: true
      }
    });
    const total = await this.prisma.article.count(
      {
        where: {
          category: args.category ? { id: +args.category } : {},
        }
      }
    );
    return {
      meta: {
        current_page: page,
        page_now: +row,
        total,
        total_page: Math.ceil(total / row)
      },
      data: articles
    }
  }

  findOne(id: number) {
    return this.prisma.article.findFirst({
      where: {
        id
      }
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: { title:updateArticleDto.title,content:updateArticleDto.content, categoryId: +updateArticleDto.categoryId }
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: { id }
    });
  }
}
