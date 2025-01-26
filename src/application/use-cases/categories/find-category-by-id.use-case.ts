import { CategoryRepository } from 'src/application/repositories/categories.repositories';
import { CATEGORY_NOTFOUND } from 'src/content/errors/category.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindCategoryByIdUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async findCategoryById(id: string): Promise<any> {
    const where: Prisma.CategoryWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const category = await this.categoryRepository.findById({ where });
    if (!category) {
      throw new NotFoundException(CATEGORY_NOTFOUND);
    }
    return category;
  }
}
