import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { BrandController } from '../controllers/brands/brands.controller';
import { BrandRepository } from '../repositories/brands.repositories';
import { GenSlugService } from '../services/genSlug.service';
import { CreateBrandUseCase } from '../use-cases/brands/create-brand.use-case';
import { DeleteBrandUseCase } from '../use-cases/brands/delete-brand-by-id.use-case';
import { FindAllBrandsUseCase } from '../use-cases/brands/find-all-brands.use-case';
import { FindBrandByIdUseCase } from '../use-cases/brands/find-brand-by-id.use-case';
import { UpdateBrandUseCase } from '../use-cases/brands/update-brand.use-case';

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
