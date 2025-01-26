import { CreateCategoryDto } from 'src/application/dtos/categories';
import { CategoryRepository } from 'src/application/repositories/categories.repositories';
import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { GenSlugService } from '../../services/genSlug.service';

@Injectable()
export class CreateCategoryUseCase {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly genSlugService: GenSlugService,
  ) {}
  async create(requestBody: CreateCategoryDto): Promise<Category> {
    const payload = { name: requestBody.name };
    const slug = await this.genSlugService.genSlug(requestBody.name);
    const data = {
      slug,
      ...payload,
    };
    const category = await this.categoryRepository.create({ data });
    return category;
  }
}
