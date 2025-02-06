import { UpdateProductDto } from 'src/application/dtos/products';
import { BRAND_NOT_FOUND } from 'src/content/errors/brand.error';
import { CATEGORY_NOT_FOUND } from 'src/content/errors/category.error';
import {
  PRODUCT_NOT_FOUND,
  PRODUCT_UPDATE_FAILED,
} from 'src/content/errors/product.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';
import { FindBrandByIdUseCase } from '../brands/find-brand-by-id.usecase';
import { FindCategoryByIdUseCase } from '../categories/find-category-by-id.use-case';
import { FindProductByIdUseCase } from './find-product-by-id.use-case';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly _productRepository: ProductRepository,
    private readonly _findProductByIdUseCase: FindProductByIdUseCase,
    private readonly _findCategoryByIdUseCase: FindCategoryByIdUseCase,
    private readonly _findBrandByIdUseCase: FindBrandByIdUseCase,
  ) {}
  async existingSku(sku: string): Promise<boolean> {
    const select: Prisma.ProductSelect = {
      id: true,
    };
    const where: Prisma.ProductWhereInput = {
      sku,
      deletedAt: {
        equals: null,
      },
    };
    const product = await this._productRepository.findFirst({
      where,
      select,
    });
    if (product) {
      return true;
    }
  }
  async update(id: string, requestBody: UpdateProductDto): Promise<Product> {
    const product = await this._findProductByIdUseCase.findProductById(id);
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND);
    }

    if (requestBody.sku) {
      const existing_sku = await this.existingSku(requestBody.sku);
      if (existing_sku) {
        throw new BadRequestException(PRODUCT_UPDATE_FAILED);
      }
    }

    if (requestBody.categoryId) {
      const category = await this._findCategoryByIdUseCase.findCategoryById(
        requestBody.categoryId,
      );
      if (!category) {
        throw new NotFoundException(CATEGORY_NOT_FOUND);
      }
    }

    if (requestBody.brandId) {
      const brand = await this._findBrandByIdUseCase.findBrandById(
        requestBody.brandId,
      );
      if (!brand) {
        throw new NotFoundException(BRAND_NOT_FOUND);
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

    return this._productRepository.update({
      where,
      data,
    });
  }
}
