import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Closeable,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class RabbitmqFactory {
  private readonly USER: string;
  private readonly PASSWORD: string;
  private readonly HOST: string;
  private readonly QUEUES = {
    1: 'products',
  };
  private static productInstance: ClientProxy & Closeable;

  constructor() {
    this.USER = process.env.RABBITMQ_USER;
    this.PASSWORD = process.env.RABBITMQ_PASSWORD;
    this.HOST = process.env.RABBITMQ_HOST;
  }

  private createClientProxyInstance(queue: number) {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${this.USER}:${this.PASSWORD}@${this.HOST}`],
        queue: this.QUEUES[queue],
      },
    });
  }

  public static createProductInstance() {
    if (!this.productInstance) {
      const queueOption = 1;
      this.productInstance = new RabbitmqFactory().createClientProxyInstance(
        queueOption,
      );
    }

    return this.productInstance;
  }
}
