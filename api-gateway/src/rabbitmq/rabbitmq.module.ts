import { Module } from '@nestjs/common';
import { RabbitmqFactory } from './rabbitmq.factory';

@Module({
  providers: [RabbitmqFactory],
  exports: [RabbitmqFactory],
})
export class RabbitmqModule {}
