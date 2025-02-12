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
import { Category } from '@prisma/client';
import { CreateCategoryUseCase } from '~/application/use-cases/categories/create-category.usecase';
import { DeleteCategoryUseCase } from '~/application/use-cases/categories/delete-category-by-id.usecase';
import {
  CreateCategoryDto,
  CreateCategorySchema,
  UpdateCategoryDto,
  UpdateCategorySchema,
} from 'src/application/dtos/categories';
import { UpdateCategoryUseCase } from '~/application/use-cases/categories/update-category.use-case';
import { FindCategoryByIdUseCase } from '~/application/use-cases/categories/find-category-by-id.use-case';
import { FindAllCategoriesUseCase } from '~/application/use-cases/categories/find-all-categories.usecase';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly _createCategoryUseCase: CreateCategoryUseCase,
    private readonly _findAllCategoriesUseCase: FindAllCategoriesUseCase,
    private readonly _findCategoryByIdUseCase: FindCategoryByIdUseCase,
    private readonly _updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly _deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}
  @Post()
  @UsePipes(new ZodValidationPipe(CreateCategorySchema))
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this._createCategoryUseCase.create(createCategoryDto);
  }

  @Get()
  findAllCategory(): Promise<Category[]> {
    return this._findAllCategoriesUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this._findCategoryByIdUseCase.findCategoryById(id);
  }
  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdateCategorySchema))
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this._updateCategoryUseCase.update(id, updateCategoryDto);
  }

  @Patch('/:id/delete')
  softDeleteCategoryById(@Param('id') id: string): Promise<Category> {
    return this._deleteCategoryUseCase.softDeleteCategoryById(id);
  }
}
