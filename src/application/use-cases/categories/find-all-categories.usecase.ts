import { CategoriesRepository } from 'src/application/repositories/categories.repositories';
import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';

@Injectable()
export class FindAllCategoriesUseCase {
  constructor(private readonly _categoryRepository: CategoriesRepository) {}
  async findAll(): Promise<Category[]> {
    return await this._categoryRepository.findAll();
  }
}
