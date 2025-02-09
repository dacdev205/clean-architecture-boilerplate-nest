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
  UpdateBrandSchema,
} from 'src/application/dtos/brands';
import { CreateBrandUseCase } from '~/application/usecases/brands/create-brand.usecase';
import { FindAllBrandsUseCase } from '~/application/usecases/brands/find-all-brands.usecase';
import { FindBrandByIdUseCase } from '~/application/usecases/brands/find-brand-by-id.usecase';
import { UpdateBrandUseCase } from '~/application/usecases/brands/update-brand.usecase';
import { DeleteBrandUseCase } from '~/application/usecases/brands/delete-brand-by-id.usecase';

@Controller('brand')
export class BrandController {
  constructor(
    private readonly _createBrandUseCase: CreateBrandUseCase,
    private readonly _findAllBrandsUseCase: FindAllBrandsUseCase,
    private readonly _findBrandByIdUseCase: FindBrandByIdUseCase,
    private readonly _updateBrandUseCase: UpdateBrandUseCase,
    private readonly _deleteBrandUseCase: DeleteBrandUseCase,
  ) {}
  @Post()
  @UsePipes(new ZodValidationPipe(CreateBrandSchema))
  createBrand(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return this._createBrandUseCase.create(createBrandDto);
  }

  @Get()
  findAllBrand(): Promise<Brand[]> {
    return this._findAllBrandsUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Brand> {
    return this._findBrandByIdUseCase.findBrandById(id);
  }
  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdateBrandSchema))
  update(
    @Param('id') id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ): Promise<Brand> {
    return this._updateBrandUseCase.update(id, updateBrandDto);
  }
  // test
  @Patch('/:id/delete')
  softDeleteBrandById(@Param('id') id: string): Promise<Brand> {
    return this._deleteBrandUseCase.softDeleteBrandById(id);
  }
}
