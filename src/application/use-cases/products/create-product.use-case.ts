import { CreateProductDto } from 'src/application/dtos/products/create-product.dto';
import { BRAND_NOTFOUND } from 'src/content/errors/brand.error';
import { CATEGORY_NOTFOUND } from 'src/content/errors/category.error';
import { PRODUCT_CREATE_FAILED } from 'src/content/errors/product.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { GenSlugService } from './../../services/genSlug.service';
import { ProductRepository } from '../../repositories/products.repositories';
import { FindBrandByIdUseCase } from '../brands/find-brand-by-id.use-case';
import { FindCategoryByIdUseCase } from '../categories/find-category-by-id.use-case';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly genSlugService: GenSlugService,
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
  async create(requestBody: CreateProductDto): Promise<Product> {
    const slug = await this.genSlugService.genSlug(requestBody.title);
    const existing_sku = await this.existing_sku(requestBody.sku);
    if (existing_sku) {
      throw new BadRequestException(PRODUCT_CREATE_FAILED);
    }

    const category = await this.findCategoryByIdUseCase.findCategoryById(
      requestBody.categoryId,
    );
    if (!category) {
      throw new NotFoundException(CATEGORY_NOTFOUND);
    }

    const brand = await this.findBrandByIdUseCase.findBrandById(
      requestBody.brandId,
    );
    if (!brand) {
      throw new NotFoundException(BRAND_NOTFOUND);
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

    const product = await this.productRepository.create({ data });
    return product;
  }
}
