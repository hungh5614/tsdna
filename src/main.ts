import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import 'dotenv/config';
import { contentParser } from 'fastify-multer';
import * as fs from 'fs';

async function bootstrap() {
  let httpsOptions = null;
  if (process.env.SSL_KEY_PATH && process.env.SSL_CERT_PATH) {
    httpsOptions = {
      key: fs.readFileSync(process.env.SSL_KEY_PATH),
      cert: fs.readFileSync(process.env.SSL_CERT_PATH),
    };
  }
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(httpsOptions),
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.register(contentParser);
  console.log(process.env.SERVER_PORT);
  
  await app.listen(process.env.SERVER_PORT, '0.0.0.0');
}
bootstrap();
