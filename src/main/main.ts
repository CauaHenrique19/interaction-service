import { NestFactory } from '@nestjs/core';
import { InteractionServiceModule } from './interaction-service.module';

async function bootstrap() {
  const app = await NestFactory.create(InteractionServiceModule);
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
