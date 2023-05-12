import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const {
    RABBITMQ_USER,
    RABBITMQ_PASSWORD,
    RABBITMQ_HOST,
    RABBITMQ_QUEUE_NAME,
  } = process.env;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${RABBITMQ_USER}:${RABBITMQ_PASSWORD}@${RABBITMQ_HOST}`],
      noAck: false,
      queue: RABBITMQ_QUEUE_NAME,
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
  new Logger('Main').log('Microservice is listening');
}
bootstrap();
