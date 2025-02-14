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

import { CategoryAdapter } from 'src/interfaces/adapters/category.adapter';
import {
  CreateCategoryRequestDto,
  CreateCategoryRequestSchema,
  CreateCategoryResponseDto,
} from 'src/interfaces/dtos/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly _categoryAdapter: CategoryAdapter) {}
  @Post()
  @UsePipes(new ZodValidationPipe(CreateCategoryRequestSchema))
  createCategory(
    @Body() data: CreateCategoryRequestDto,
  ): Promise<CreateCategoryResponseDto> {
    return this._categoryAdapter.create(data);
  }

  // @Get()
  // findAllCategory(): Promise<Category[]> {
  //   return this._findAllCategoriesUseCase.execute();
  // }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CreateCategoryResponseDto> {
    return this._categoryAdapter.findFrist(id);
  }
  // @Patch(':id')
  // @UsePipes(new ZodValidationPipe(UpdateCategorySchema))
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCategoryDto: UpdateCategoryDto,
  // ): Promise<Category> {
  //   return this._updateCategoryUseCase.execute(id, updateCategoryDto);
  // }

  // @Patch('/:id/delete')
  // softDeleteCategoryById(@Param('id') id: string): Promise<Category> {
  //   return this._deleteCategoryUseCase.execute(id);
  // }
}
