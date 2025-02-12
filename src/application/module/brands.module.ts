import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { BrandController } from '../controllers/brands/brands.controller';
import { BRAND_REPOSITORY } from '../repositories/brands.repositoies-v2';
import { BrandRepository } from '../repositories/brands.repositories';
// import { CreateBrandUseCase } from '../usecases/brands/create-brand.usecase';
import { DeleteBrandUseCase } from '../use-cases/brands/delete-brand-by-id.usecase';
import { FindAllBrandsUseCase } from '../use-cases/brands/find-all-brands.usecase';
import { FindBrandByIdUseCase } from '../use-cases/brands/find-brand-by-id.usecase';
import { UpdateBrandUseCase } from '../use-cases/brands/update-brand.usecase';
import { GenSlugService } from '../utils/gen-slug.service';

@Module({
  imports: [PrismaModule],
  controllers: [BrandController],
  providers: [
    BrandRepository,
    // CreateBrandUseCase,
    FindAllBrandsUseCase,
    GenSlugService,
    FindBrandByIdUseCase,
    DeleteBrandUseCase,
    UpdateBrandUseCase,
  ],
  exports: [BrandRepository],
})
export class BrandModule {}
