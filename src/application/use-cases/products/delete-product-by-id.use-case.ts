import { PRODUCT_NOT_FOUND } from 'src/content/errors/product.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';

@Injectable()
export class DeleteProductUseCase {
  constructor(private readonly _productRepository: ProductRepository) {}
  async softDeleteProductById(id: string): Promise<Product> {
    const where: Prisma.ProductWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const Product = await this._productRepository.findById({ where });
    if (!Product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND);
    }
    const data: Prisma.ProductUpdateInput = {
      deletedAt: new Date(),
    };
    return this._productRepository.update({
      where,
      data,
    });
  }
}
