import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import { ConfigService } from '@nestjs/config';

//import { generateTypeormConfigFile, setDefaultUser } from './scripts/generate-typeorm-config-file';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
  // const logger = new Logger('Bootstrap');
  // const config = app.get(ConfigService);
  // const port = parseInt(config.get<string>(3000), 10) || 5000;

  initSwagger(app);
  app.enableCors();
  

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3000);
  
}
bootstrap();
