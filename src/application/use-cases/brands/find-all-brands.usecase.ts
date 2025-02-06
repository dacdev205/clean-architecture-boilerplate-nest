import { BrandRepository } from 'src/application/repositories/brands.repositories';
import { Injectable } from '@nestjs/common';
import { Brand } from '@prisma/client';

@Injectable()
export class FindAllBrandsUseCase {
  constructor(private readonly _brandRepository: BrandRepository) {}
  async findAll(): Promise<Brand[]> {
    return await this._brandRepository.findAll();
  }
}
