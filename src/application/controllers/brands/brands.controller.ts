import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.schema';
import { Brand } from '@prisma/client';
import {
  CreateBrandDto,
  CreateBrandSchema,
  UpdateBrandDto,
} from 'src/application/dtos/brands';
import { CreateBrandUseCase } from 'src/application/use-cases/brands/create-brand.use-case';
import { FindAllBrandsUseCase } from '~/application/use-cases/brands/find-all-brands.use-case';
import { FindBrandByIdUseCase } from 'src/application/use-cases/brands/find-brand-by-id.use-case';
import { UpdateBrandUseCase } from 'src/application/use-cases/brands/update-brand.use-case';
import { DeleteBrandUseCase } from 'src/application/use-cases/brands/delete-brand-by-id.use-case';

@Controller('brand')
export class BrandController {
  constructor(
    private readonly createBrandUseCase: CreateBrandUseCase,
    private readonly findAllBrandsUseCase: FindAllBrandsUseCase,
    private readonly findBrandByIdUseCase: FindBrandByIdUseCase,
    private readonly updateBrandUseCase: UpdateBrandUseCase,
    private readonly deleteBrandUseCase: DeleteBrandUseCase,
  ) {}
  @Post()
  @UsePipes(new ZodValidationPipe(CreateBrandSchema))
  createBrand(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.createBrandUseCase.create(createBrandDto);
  }

  @Get()
  findAllBrand(): Promise<Brand[]> {
    return this.findAllBrandsUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Brand> {
    return this.findBrandByIdUseCase.findBrandById(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return this.updateBrandUseCase.update(id, updateBrandDto);
  }
  // test
  @Patch('/:id/delete')
  softDeleteBrandById(@Param('id') id: string): Promise<Brand> {
    return this.deleteBrandUseCase.softDeleteBrandById(id);
  }
}
