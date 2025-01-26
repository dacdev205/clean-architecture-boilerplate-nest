import { CategoryRepository } from 'src/application/repositories/categories.repositories';
import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';

@Injectable()
export class FindAllCategoriesUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
}
