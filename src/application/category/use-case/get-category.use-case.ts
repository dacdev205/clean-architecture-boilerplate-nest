import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  CATEGORY_REPOSITPRY,
  CategoryRepository,
} from 'src/domain/repositories/category.repository';
import { Category } from 'src/domain/types/category.type';
import { GetCategoryResultUseCaseDto } from '../dtos/get-category.dto';
import { CATEGORY_NOT_FOUND } from '~/content/errors/category.error';

@Injectable()
export class GetCategoryUseCase {
  constructor(
    @Inject(CATEGORY_REPOSITPRY)
    public readonly _categoryRepository: CategoryRepository,
  ) {}
  async execute(id: string): Promise<GetCategoryResultUseCaseDto> {
    const category = await this._categoryRepository.findFirst({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(CATEGORY_NOT_FOUND);
    }
    return category;
  }
}
