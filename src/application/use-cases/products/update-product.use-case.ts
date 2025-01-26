import { UpdateProductDto } from 'src/application/dtos/products';
import { BRAND_NOTFOUND } from 'src/content/errors/brand.error';
import { CATEGORY_NOTFOUND } from 'src/content/errors/category.error';
import {
  PRODUCT_NOTFOUND,
  PRODUCT_UPDATE_FAILED,
} from 'src/content/errors/product.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';
import { FindBrandByIdUseCase } from '../brands/find-brand-by-id.use-case';
import { FindCategoryByIdUseCase } from '../categories/find-category-by-id.use-case';
import { FindProductByIdUseCase } from './find-product-by-id.use-case';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
    private readonly findCategoryByIdUseCase: FindCategoryByIdUseCase,
    private readonly findBrandByIdUseCase: FindBrandByIdUseCase,
  ) {}
  async existing_sku(sku: string): Promise<boolean> {
    const select: Prisma.ProductSelect = {
      id: true,
    };
    const where: Prisma.ProductWhereInput = {
      sku,
      deletedAt: {
        equals: null,
      },
    };
    const product = await this.productRepository.findFirst({
      where,
      select,
    });
    if (product) {
      return true;
    }
  }
  async update(id: string, requestBody: UpdateProductDto): Promise<Product> {
    const product = await this.findProductByIdUseCase.findProductById(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOTFOUND);
    }

    if (requestBody.sku) {
      const existing_sku = await this.existing_sku(requestBody.sku);
      if (existing_sku) {
        throw new BadRequestException(PRODUCT_UPDATE_FAILED);
      }
    }

    if (requestBody.categoryId) {
      const category = await this.findCategoryByIdUseCase.findCategoryById(
        requestBody.categoryId,
      );
      if (!category) {
        throw new NotFoundException(CATEGORY_NOTFOUND);
      }
    }

    if (requestBody.brandId) {
      const brand = await this.findBrandByIdUseCase.findBrandById(
        requestBody.brandId,
      );
      if (!brand) {
        throw new NotFoundException(BRAND_NOTFOUND);
      }
    }

    const where: Prisma.ProductWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };

    const data = {
      ...requestBody,
    };

    return this.productRepository.update({
      where,
      data,
    });
  }
}
