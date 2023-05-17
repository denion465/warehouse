import { describe, it } from '@jest/globals';
import { validateSync } from 'class-validator';
import { ProductDto } from 'src/product/dto/product.dto';

describe('ProductDto', () => {
  it('should be a valid product dto', () => {
    const product = new ProductDto();
    product.name = 'product1';
    product.description = 'product1 description';
    product.sku = 'product1 sku';
    product.brand = 'product1 brand';
    product.quantity = 10;

    const errors = validateSync(product);
    expect(errors.length).toStrictEqual(0);
  });

  it('should have errors if the product dto is not valid', () => {
    const product = new ProductDto();
    product.name = '';
    product.sku = '';
    product.brand = '';
    product.quantity = null;

    const errors = validateSync(product);
    expect(errors.length).toBeGreaterThan(0);
  });
});
