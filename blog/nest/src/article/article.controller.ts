import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, UseInterceptors, ClassSerializerInterceptor, SerializeOptions } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Controller('article')
// @UseInterceptors(ClassSerializerInterceptor)
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  findAll(@Query() args={}){
    return this.articleService.findAll(args)
  }

  @Get(':id')
  // @SerializeOptions({strategy:'excludeAll'})
  async findOne(@Param('id') id: string) {
    const article =await this.articleService.findOne(+id);
    return new Article(article)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
