import { CategoryRepository } from 'src/application/repositories/categories.repositories';
import { CATEGORY_NOTFOUND } from 'src/content/errors/category.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async softDeleteCategoryById(id: string): Promise<Category> {
    const where: Prisma.CategoryWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const Category = await this.categoryRepository.findById({ where });
    if (!Category) {
      throw new NotFoundException(CATEGORY_NOTFOUND);
    }
    const data: Prisma.CategoryUpdateInput = {
      deletedAt: new Date(),
    };
    return this.categoryRepository.update({
      where,
      data,
    });
  }
}
