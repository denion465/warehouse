import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class ProductDto {
  @MaxLength(40)
  @IsString()
  name: string;

  @MaxLength(100)
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  sku: string;

  @IsString()
  brand: string;

  @IsNumber()
  quantity: number;
}
