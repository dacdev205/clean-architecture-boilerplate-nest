import { CategoriesRepository } from 'src/application/repositories/categories.repositories';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CategoriesController } from '../controllers/categories/categories.controller';
import { GenSlugService } from '../services/gen-slug.service';
import { CreateCategoryUseCase } from '../use-cases/categories/create-category.usecase';
import { DeleteCategoryUseCase } from '../use-cases/categories/delete-category-by-id.usecase';
import { FindAllCategoriesUseCase } from '../use-cases/categories/find-all-categories.usecase';
import { FindCategoryByIdUseCase } from '../use-cases/categories/find-category-by-id.use-case';
import { UpdateCategoryUseCase } from '../use-cases/categories/update-category.use-case';

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
