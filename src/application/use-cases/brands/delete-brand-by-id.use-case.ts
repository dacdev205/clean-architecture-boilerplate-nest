import { BrandRepository } from 'src/application/repositories/brands.repositories';
import { BRAND_NOTFOUND } from 'src/content/errors/brand.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand, Prisma } from '@prisma/client';

@Injectable()
export class DeleteBrandUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}
  async softDeleteBrandById(id: string): Promise<Brand> {
    const where: Prisma.BrandWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const brand = await this.brandRepository.findById({ where });
    if (!brand) {
      throw new NotFoundException(BRAND_NOTFOUND);
    }
    const data: Prisma.BrandUpdateInput = {
      deletedAt: new Date(),
    };
    return this.brandRepository.update({
      where,
      data,
    });
  }
}
