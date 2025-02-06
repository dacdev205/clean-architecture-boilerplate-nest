import {} from 'src/content/errors/category.error';

import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoriesRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async create(requestBody: Prisma.CategoryCreateArgs): Promise<Category> {
    return this._prisma.category.create(requestBody);
  }
  async findAll(): Promise<Category[]> {
    return this._prisma.category.findMany();
  }

  async findById(arg: Prisma.CategoryFindUniqueArgs): Promise<Category | null> {
    return this._prisma.category.findUnique(arg);
  }
  async update(arg: Prisma.CategoryUpdateArgs): Promise<Category> {
    return this._prisma.category.update(arg);
  }
}
