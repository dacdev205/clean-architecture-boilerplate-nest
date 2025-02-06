import { BrandRepository } from 'src/application/repositories/brands.repositories';
import { BRAND_NOT_FOUND } from 'src/content/errors/brand.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindBrandByIdUseCase {
  constructor(private readonly _brandRepository: BrandRepository) {}
  async findBrandById(id: string): Promise<any> {
    const where: Prisma.BrandWhereUniqueInput = {
      id,
      deletedAt: {
        equals: null,
      },
    };
    const brand = await this._brandRepository.findById({ where });
    if (!brand) {
      throw new NotFoundException(BRAND_NOT_FOUND);
    }
    return brand;
  }
}
