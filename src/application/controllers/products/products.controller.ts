import { CreateProductUseCase } from './../../use-cases/products/create-product.use-case';
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
import { UpdateProductUseCase } from 'src/application/use-cases/products/update-product.use-case';
import { DeleteProductUseCase } from 'src/application/use-cases/products/delete-product-by-id.use-case';
import { FindAllProductsUseCase } from 'src/application/use-cases/products/find-all.use-case';
import { FindProductByIdUseCase } from '~/application/use-cases/products/find-product-by-id.use-case';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
    private readonly findProductByIdUseCase: FindProductByIdUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createProductSchema))
  async createProduct(
    @Body()
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const product = await this.createProductUseCase.create(createProductDto);
    return product;
  }

  @Get()
  findAllProduct(
    @Query(new ZodValidationPipe(FilterProductSchema))
    search: FilterProductDto,
  ): Promise<Product[]> {
    return this.findAllProductsUseCase.findAll(search);
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.findProductByIdUseCase.findProductById(id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(UpdateProductSchema))
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.updateProductUseCase.update(id, updateProductDto);
  }

  @Patch('/:id/delete')
  softDeleteProductById(@Param('id') id: string) {
    return this.deleteProductUseCase.softDeleteProductById(id);
  }
}
