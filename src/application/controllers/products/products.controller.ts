import { CreateProductUseCase } from '../../usecases/products/create-product.use-case';
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.schema';

import { Product } from '@prisma/client';

import {
  CreateProductDto,
  createProductSchema,
  FilterProductDto,
  FilterProductSchema,
  UpdateProductDto,
  UpdateProductSchema,
} from 'src/application/dtos/products';
import { UpdateProductUseCase } from '~/application/usecases/products/update-product.use-case';
import { DeleteProductUseCase } from '~/application/usecases/products/delete-product-by-id.use-case';
import { FindAllProductsUseCase } from '~/application/usecases/products/find-all-products.use-case';
import { FindProductByIdUseCase } from '~/application/usecases/products/find-product-by-id.use-case';

@Controller('products')
export class ProductController {
  constructor(
    private readonly _createProductUseCase: CreateProductUseCase,
    private readonly _findAllProductsUseCase: FindAllProductsUseCase,
    private readonly _findProductByIdUseCase: FindProductByIdUseCase,
    private readonly _updateProductUseCase: UpdateProductUseCase,
    private readonly _deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createProductSchema))
  async createProduct(
    @Body()
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const product = await this._createProductUseCase.create(createProductDto);
    return product;
  }

  @Get()
  findAllProduct(
    @Query(new ZodValidationPipe(FilterProductSchema))
    search: FilterProductDto,
  ): Promise<Product[]> {
    return this._findAllProductsUseCase.findAll(search);
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this._findProductByIdUseCase.findProductById(id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdateProductSchema))
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this._updateProductUseCase.update(id, updateProductDto);
  }

  @Patch('/:id/delete')
  softDeleteProductById(@Param('id') id: string) {
    return this._deleteProductUseCase.softDeleteProductById(id);
  }
}
