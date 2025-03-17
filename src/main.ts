import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Enable Swagger
  const config = new DocumentBuilder()
    .setTitle('Nest.js CRUD API')
    .setDescription('API documentation for User CRUD operations')
    .setVersion('1.0')
    .addTag('users')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header', }, 'access-token') // Explicitly define BearerAuth
    .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true, // Keep token after page refresh
      },
    });

  await app.listen(3000);
}
bootstrap();
