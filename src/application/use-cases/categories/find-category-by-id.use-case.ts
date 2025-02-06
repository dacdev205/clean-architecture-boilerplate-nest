import { CategoriesRepository } from 'src/application/repositories/categories.repositories';
import { CATEGORY_NOT_FOUND } from 'src/content/errors/category.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindCategoryByIdUseCase {
  constructor(private readonly _categoryRepository: CategoriesRepository) {}
  async findCategoryById(id: string): Promise<any> {
    const where: Prisma.CategoryWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const category = await this._categoryRepository.findById({ where });
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND);
    }
    return category;
  }
}
