import { BrandRepository } from 'src/application/repositories/brands.repositories';
import { BRAND_NOTFOUND } from 'src/content/errors/brand.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindBrandByIdUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}
  async findBrandById(id: string): Promise<any> {
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
    return brand;
  }
}
