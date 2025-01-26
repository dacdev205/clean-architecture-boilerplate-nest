import { PRODUCT_NOTFOUND } from 'src/content/errors/product.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';

@Injectable()
export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}
  async softDeleteProductById(id: string): Promise<Product> {
    const where: Prisma.ProductWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const Product = await this.productRepository.findById({ where });
    if (!Product) {
      throw new NotFoundException(PRODUCT_NOTFOUND);
    }
    const data: Prisma.ProductUpdateInput = {
      deletedAt: new Date(),
    };
    return this.productRepository.update({
      where,
      data,
    });
  }
}
