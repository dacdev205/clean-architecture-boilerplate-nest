import { Prisma } from '@prisma/client';
import { Category } from '../types/category.type';

export interface CategoryRepository {
  findFirst(args: Prisma.CategoryFindFirstArgs): Promise<Category | null>;
  create(args: Prisma.CategoryCreateArgs): Promise<Category>;
}
export const CATEGORY_REPOSITPRY = Symbol('CATEGORY_REPOSITPRY');
