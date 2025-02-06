import { UpdateCategoryDto } from 'src/application/dtos/categories';
import { CategoriesRepository } from 'src/application/repositories/categories.repositories';
import {
  CATEGORY_NOT_FOUND,
  CATEGORY_UPDATE_FAILED,
} from 'src/content/errors/Category.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(private readonly _categoryRepository: CategoriesRepository) {}
  async update(id: string, requestBody: UpdateCategoryDto): Promise<Category> {
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
    const Category_updated = await this._categoryRepository.update({
      where,
      data: requestBody,
    });
    if (!Category_updated) {
      throw new BadRequestException(CATEGORY_UPDATE_FAILED);
    }
    return Category_updated;
  }
}
