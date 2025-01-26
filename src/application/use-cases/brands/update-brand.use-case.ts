import { UpdateBrandDto } from 'src/application/dtos/brands';
import { BrandRepository } from 'src/application/repositories/brands.repositories';
import {
  BRAND_NOTFOUND,
  BRAND_UPDATE_FAILED,
} from 'src/content/errors/brand.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Brand, Prisma } from '@prisma/client';

@Injectable()
export class UpdateBrandUseCase {
  constructor(private readonly brandRepository: BrandRepository) {}
  async update(id: string, requestBody: UpdateBrandDto): Promise<Brand> {
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
    const brand_updated = await this.brandRepository.update({
      where,
      data: requestBody,
    });
    if (!brand_updated) {
      throw new BadRequestException(BRAND_UPDATE_FAILED);
    }
    return brand_updated;
  }
}
