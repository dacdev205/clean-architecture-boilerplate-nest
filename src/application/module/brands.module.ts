import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { BrandController } from '../controllers/brands/brands.controller';
import { BrandRepository } from '../repositories/brands.repositories';
import { GenSlugService } from '../services/gen-slug.service';
import { CreateBrandUseCase } from '../usecases/brands/create-brand.usecase';
import { DeleteBrandUseCase } from '../usecases/brands/delete-brand-by-id.usecase';
import { FindAllBrandsUseCase } from '../usecases/brands/find-all-brands.usecase';
import { FindBrandByIdUseCase } from '../usecases/brands/find-brand-by-id.usecase';
import { UpdateBrandUseCase } from '../usecases/brands/update-brand.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [BrandController],
  providers: [
    BrandRepository,
    CreateBrandUseCase,
    FindAllBrandsUseCase,
    GenSlugService,
    FindBrandByIdUseCase,
    DeleteBrandUseCase,
    UpdateBrandUseCase,
  ],
  exports: [BrandRepository],
})
export class BrandModule {}
