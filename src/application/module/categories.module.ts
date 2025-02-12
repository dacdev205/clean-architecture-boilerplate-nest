import { CategoriesRepository } from 'src/application/repositories/categories.repositories';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CategoriesController } from '../controllers/categories/categories.controller';
import { CreateCategoryUseCase } from '../use-cases/categories/create-category.usecase';
import { DeleteCategoryUseCase } from '../use-cases/categories/delete-category-by-id.usecase';
import { FindAllCategoriesUseCase } from '../use-cases/categories/find-all-categories.usecase';
import { FindCategoryByIdUseCase } from '../use-cases/categories/find-category-by-id.use-case';
import { UpdateCategoryUseCase } from '../use-cases/categories/update-category.use-case';
import { GenSlugService } from '../utils/gen-slug.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [
    CategoriesRepository,
    FindAllCategoriesUseCase,
    GenSlugService,
    CreateCategoryUseCase,
    FindCategoryByIdUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
  ],
  exports: [CategoriesRepository],
})
export class CategoryModule {}
