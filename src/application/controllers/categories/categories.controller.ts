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
import { CreateCategoryUseCase } from 'src/application/use-cases/categories/create-category.use-case';
import { DeleteCategoryUseCase } from 'src/application/use-cases/categories/delete-category-by-id.use-case';
import {
  CreateCategoryDto,
  CreateCategorySchema,
  UpdateCategoryDto,
} from 'src/application/dtos/categories';
import { UpdateCategoryUseCase } from 'src/application/use-cases/categories/update-category.use-case';
import { FindCategoryByIdUseCase } from 'src/application/use-cases/categories/find-category-by-id.use-case';
import { FindAllCategoriesUseCase } from '~/application/use-cases/categories/find-all.use-case';

@Controller('Category')
export class CategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly findAllCategoriesUseCase: FindAllCategoriesUseCase,
    private readonly findCategoryByIdUseCase: FindCategoryByIdUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}
  @Post()
  @UsePipes(new ZodValidationPipe(CreateCategorySchema))
  createCategory(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.createCategoryUseCase.create(createCategoryDto);
  }

  @Get()
  findAllCategory(): Promise<Category[]> {
    return this.findAllCategoriesUseCase.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.findCategoryByIdUseCase.findCategoryById(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.updateCategoryUseCase.update(id, updateCategoryDto);
  }

  @Patch('/:id/delete')
  softDeleteCategoryById(@Param('id') id: string): Promise<Category> {
    return this.deleteCategoryUseCase.softDeleteCategoryById(id);
  }
}
