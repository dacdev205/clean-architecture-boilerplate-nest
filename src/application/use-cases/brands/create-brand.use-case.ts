import { CreateBrandDto } from 'src/application/dtos/brands';
import { BrandRepository } from 'src/application/repositories/brands.repositories';
import { Injectable } from '@nestjs/common';
import { Brand } from '@prisma/client';
import { GenSlugService } from './../../services/genSlug.service';

@Injectable()
export class CreateBrandUseCase {
  constructor(
    private readonly brandRepository: BrandRepository,
    private readonly genSlugService: GenSlugService,
  ) {}
  async create(requestBody: CreateBrandDto): Promise<Brand> {
    const payload = { name: requestBody.name };
    const slug = await this.genSlugService.genSlug(requestBody.name);
    const data = {
      slug,
      ...payload,
    };
    const brand = await this.brandRepository.create({ data });
    return brand;
  }
}
