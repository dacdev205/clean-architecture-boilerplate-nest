import { PRODUCT_NOT_FOUND } from 'src/content/errors/product.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';

@Injectable()
export class FindProductByIdUseCase {
  constructor(private readonly _productRepository: ProductRepository) {}
  async findProductById(id: string): Promise<any> {
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
    return Product;
  }
}
