import { CategoryRepository } from 'src/domain/repositories/category.repository';
import { Category } from 'src/domain/types/category.type';
import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async findFirst(
    args: Prisma.CategoryFindFirstArgs,
  ): Promise<Category | null> {
    return this._prisma.category.findFirst({
      ...args,
      include: {
        products: true,
      },
    });
  }
  async create(args: Prisma.CategoryCreateArgs): Promise<Category> {
    return this._prisma.category.create({
      ...args,
      include: {
        products: true,
      },
    });
  }
}
