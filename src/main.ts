import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const { PORT } = process.env
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe())
  try {
    await app.listen(PORT, () => { console.log(`Port is runnig on port ${PORT}`) });
  } catch (error) {
    console.log(error)
  }
}
bootstrap();

