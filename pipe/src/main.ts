import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { Validate } from './validate';
import { ValidateExceptionFilter } from './validate-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ParseIntPipe())
  app.useGlobalPipes(new Validate);
  app.useGlobalFilters(new ValidateExceptionFilter())
  await app.listen(3000);
}
bootstrap();
