import {
  CATEGORY_REPOSITPRY,
  CategoryRepository,
} from 'src/domain/repositories/category.repository';
import { Inject, Injectable } from '@nestjs/common';

import { GenSlugService } from '~/application/utils/gen-slug.service';
import {
  CreateCategoryUseCaseDto,
  CreateCategoryUseCaseResultDto,
} from '../dtos/create-category.dto';

@Injectable()
export class CreateCategoryUseCase {
  constructor(
    @Inject(CATEGORY_REPOSITPRY)
    public readonly _categoryRepository: CategoryRepository,
    private readonly _genSlugService: GenSlugService,
  ) {}
  async execute(
    data: CreateCategoryUseCaseDto,
  ): Promise<CreateCategoryUseCaseResultDto> {
    const { name } = data;
    return await this._categoryRepository.create({
      data: {
        name,
        slug: await this._genSlugService.createSlug(data.name),
      },
    });
  }
}
