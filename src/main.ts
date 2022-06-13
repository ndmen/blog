import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog')
    .setDescription('The blog API description')
    .setVersion('1.0')
    .addTag('posts')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useStaticAssets(join(__dirname, '..', 'src/public'));
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.BLOG_PORT);
}
bootstrap();
