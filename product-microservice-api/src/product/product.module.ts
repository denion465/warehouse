import { Module } from '@nestjs/common';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

@Module({
  imports: [],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
