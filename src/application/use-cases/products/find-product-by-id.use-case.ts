import { PRODUCT_NOTFOUND } from 'src/content/errors/product.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';

@Injectable()
export class FindProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}
  async findProductById(id: string): Promise<any> {
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
    return Product;
  }
}
