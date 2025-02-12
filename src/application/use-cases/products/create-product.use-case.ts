import { CreateProductDto } from 'src/application/dtos/products/create-product.dto';
import { BRAND_NOT_FOUND } from 'src/content/errors/brand.error';
import { CATEGORY_NOT_FOUND } from 'src/content/errors/category.error';
import { PRODUCT_CREATE_FAILED } from 'src/content/errors/product.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';
import { GenSlugService } from '../../utils/gen-slug.service';
import { FindBrandByIdUseCase } from '../brands/find-brand-by-id.usecase';
import { FindCategoryByIdUseCase } from '../categories/find-category-by-id.use-case';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly _productRepository: ProductRepository,
    private readonly _genSlugService: GenSlugService,
    private readonly _findCategoryByIdUseCase: FindCategoryByIdUseCase,
    private readonly _findBrandByIdUseCase: FindBrandByIdUseCase,
  ) {}
  async existingSku(sku: string): Promise<boolean | undefined> {
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
  async create(requestBody: CreateProductDto): Promise<Product> {
    const slug = await this._genSlugService.genSlug(requestBody.title);
    const existing_sku = await this.existingSku(requestBody.sku);
    if (existing_sku) {
      throw new BadRequestException(PRODUCT_CREATE_FAILED);
    }

    const category = await this._findCategoryByIdUseCase.findCategoryById(
      requestBody.categoryId,
    );
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND);
    }

    const brand = await this._findBrandByIdUseCase.findBrandById(
      requestBody.brandId as string,
    );
    if (!brand) {
      throw new NotFoundException(BRAND_NOT_FOUND);
    }
    const data = {
      slug,
      title: requestBody.title,
      description: requestBody.description,
      sku: requestBody.sku,
      price: requestBody.price,
      features: requestBody.features,
      specifications: requestBody.specifications,
      images: requestBody.images,
      warranty: requestBody.warranty,
      deliveryInfo: requestBody.deliveryInfo,
      urlSource: requestBody.url_source,
      category: {
        connect: { id: requestBody.categoryId },
      },
      brand: {
        connect: { id: requestBody.brandId },
      },
    };

    const product = await this._productRepository.create({ data });
    return product;
  }
}
