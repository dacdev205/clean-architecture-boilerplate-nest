import {
  CreateCategoryUseCaseDto,
  CreateCategoryUseCaseResultDto,
} from '~/application/category/dtos/create-category.dto';
import { GetCategoryResultUseCaseDto } from '~/application/category/dtos/get-category.dto';
import { CreateCategoryUseCase } from '~/application/category/use-case/create-category.use-case';
import { GetCategoryUseCase } from '~/application/category/use-case/get-category.use-case';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CategoryAdapter {
  constructor(
    private readonly _createCategoryUseCase: CreateCategoryUseCase,
    private readonly _getCategoryUseCase: GetCategoryUseCase,
  ) {}
  async create(
    data: CreateCategoryUseCaseDto,
  ): Promise<CreateCategoryUseCaseResultDto> {
    return this._createCategoryUseCase.execute(data);
  }
  async findFrist(id: string): Promise<GetCategoryResultUseCaseDto> {
    return this._getCategoryUseCase.execute(id);
  }
}
