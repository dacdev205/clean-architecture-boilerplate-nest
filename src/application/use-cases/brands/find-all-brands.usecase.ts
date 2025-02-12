import { BrandRepository } from '~/application/repositories/brands.repositories';
import { Inject, Injectable } from '@nestjs/common';
import { Brand } from '@prisma/client';

@Injectable()
export class FindAllBrandsUseCase {
  constructor(private readonly _brandRepository: BrandRepository) {}
  async execute(): Promise<Brand[]> {
    return await this._brandRepository.findAll();
  }
}
