import { CategoryRepository } from 'src/application/repositories/categories.repositories';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CategoryController } from '../controllers/categories/categories.controller';
import { GenSlugService } from '../services/genSlug.service';
import { CreateCategoryUseCase } from '../use-cases/categories/create-category.use-case';
import { DeleteCategoryUseCase } from '../use-cases/categories/delete-category-by-id.use-case';
import { FindAllCategoriesUseCase } from '../use-cases/categories/find-all.use-case';
import { FindCategoryByIdUseCase } from '../use-cases/categories/find-category-by-id.use-case';
import { UpdateCategoryUseCase } from '../use-cases/categories/update-category.use-case';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryController],
  providers: [
    CategoryRepository,
    FindAllCategoriesUseCase,
    GenSlugService,
    CreateCategoryUseCase,
    FindCategoryByIdUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
  ],
  exports: [CategoryRepository],
})
export class CategoryModule {}
