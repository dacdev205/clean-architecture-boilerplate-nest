import { CategoriesRepository } from 'src/application/repositories/categories.repositories';
import { CATEGORY_NOT_FOUND } from 'src/content/errors/category.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(private readonly _categoryRepository: CategoriesRepository) {}
  async softDeleteCategoryById(id: string): Promise<Category> {
    const where: Prisma.CategoryWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const Category = await this._categoryRepository.findById({ where });
    if (!Category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND);
    }
    const data: Prisma.CategoryUpdateInput = {
      deletedAt: new Date(),
    };
    return this._categoryRepository.update({
      where,
      data,
    });
  }
}
