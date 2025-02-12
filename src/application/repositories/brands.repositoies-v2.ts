import { Brand, Prisma } from '@prisma/client';

export interface BrandRepository {
  create(args: Prisma.BrandCreateArgs): Promise<Brand>;
  findAll(args?: Prisma.BrandFindManyArgs): Promise<Brand[]>;
}

export const BRAND_REPOSITORY = Symbol('BrandRepository');
