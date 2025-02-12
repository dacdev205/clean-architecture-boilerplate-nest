import { CreateCategoryDto } from 'src/application/dtos/categories';
import { CategoriesRepository } from 'src/application/repositories/categories.repositories';
import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { GenSlugService } from '../../utils/gen-slug.service';

@Injectable()
export class CreateCategoryUseCase {
  constructor(
    private readonly _categoryRepository: CategoriesRepository,
    private readonly _genSlugService: GenSlugService,
  ) {}
  async create(requestBody: CreateCategoryDto): Promise<Category> {
    const payload = { name: requestBody.name };
    const slug = await this._genSlugService.genSlug(requestBody.name);
    const data = {
      slug,
      ...payload,
    };
    const category = await this._categoryRepository.create({ data });
    return category;
  }
}
