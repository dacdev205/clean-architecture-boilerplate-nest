import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/products';
import { ProductRepository } from '../repositories/products.repositories';
import { GenSlugService } from '../services/gen-slug.service';
import { FindBrandByIdUseCase } from '../usecases/brands/find-brand-by-id.usecase';
import { FindAllCategoriesUseCase } from '../usecases/categories/find-all-categories.usecase';
import { FindCategoryByIdUseCase } from '../usecases/categories/find-category-by-id.use-case';
import { CreateProductUseCase } from '../usecases/products/create-product.use-case';
import { DeleteProductUseCase } from '../usecases/products/delete-product-by-id.use-case';
import { FindAllProductsUseCase } from '../usecases/products/find-all-products.use-case';
import { FindProductByIdUseCase } from '../usecases/products/find-product-by-id.use-case';
import { UpdateProductUseCase } from '../usecases/products/update-product.use-case';
import { BrandModule } from './brands.module';
import { CategoryModule } from './categories.module';

@Module({
  imports: [PrismaModule, CategoryModule, BrandModule],
  controllers: [ProductController],
  providers: [
    ProductRepository,
    CreateProductUseCase,
    FindAllProductsUseCase,
    FindAllCategoriesUseCase,
    FindProductByIdUseCase,
    FindCategoryByIdUseCase,
    FindBrandByIdUseCase,
    GenSlugService,
    UpdateProductUseCase,
    DeleteProductUseCase,
  ],
})
export class ProductModule {}
