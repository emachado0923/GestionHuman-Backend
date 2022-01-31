// import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
// import {INestApplication} from '@nestjs/common';


// export const initSwagger = (app:INestApplication)=>{
//     const swaggerConfig = new DocumentBuilder()
//     .setTitle('Gestion_Humana_API')
//     .setDescription('Descripción de las API.')
//         .build();
//     const document=SwaggerModule.createDocument(app,swaggerConfig);
//     SwaggerModule.setup('/docs', app, document);
// };


import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gestion Humana API')
    .addBearerAuth()
    .setDescription(
      'Descripcion de las API.',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};

