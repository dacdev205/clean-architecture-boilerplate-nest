import { PrismaService } from '~/infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Brand, Prisma } from '@prisma/client';

@Injectable()
export class BrandRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async create(requestBody: Prisma.BrandCreateArgs): Promise<Brand> {
    return this._prisma.brand.create(requestBody);
  }
  async findAll(args?: Prisma.BrandFindManyArgs): Promise<Brand[]> {
    return this._prisma.brand.findMany(args);
  }
  async findById(arg: Prisma.BrandFindUniqueArgs): Promise<Brand | null> {
    return this._prisma.brand.findUnique(arg);
  }
  async update(arg: Prisma.BrandUpdateArgs): Promise<Brand> {
    return this._prisma.brand.update(arg);
  }
}
