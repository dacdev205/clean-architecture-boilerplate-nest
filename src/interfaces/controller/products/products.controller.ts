// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Patch,
//   Post,
//   Query,
//   UsePipes,
// } from '@nestjs/common';
// import { ZodValidationPipe } from 'src/common/pipes/zod-validation.schema';

// import { Product } from '@prisma/client';

// import {
//   CreateProductDto,
//   createProductSchema,
//   FilterProductDto,
//   FilterProductSchema,
//   UpdateProductDto,
//   UpdateProductSchema,
// } from 'src/application/dtos/products';
// import { UpdateProductUseCase } from '~/application/use-cases/products/update-product.use-case';
// import { DeleteProductUseCase } from '~/application/use-cases/products/delete-product-by-id.use-case';
// import { FindAllProductsUseCase } from '~/application/use-cases/products/find-all-products.use-case';
// import { FindProductByIdUseCase } from '~/application/use-cases/products/find-product-by-id.use-case';
// import { CreateProductUseCase } from '~/application/use-cases/products/create-product.use-case';

// @Controller('products')
// export class ProductController {
//   constructor(
//     private readonly _createProductUseCase: CreateProductUseCase,
//     private readonly _findAllProductsUseCase: FindAllProductsUseCase,
//     private readonly _findProductByIdUseCase: FindProductByIdUseCase,
//     private readonly _updateProductUseCase: UpdateProductUseCase,
//     private readonly _deleteProductUseCase: DeleteProductUseCase,
//   ) {}

//   @Post()
//   @UsePipes(new ZodValidationPipe(createProductSchema))
//   async createProduct(
//     @Body()
//     createProductDto: CreateProductDto,
//   ): Promise<Product> {
//     const product = await this._createProductUseCase.execute(createProductDto);
//     return product;
//   }

//   @Get()
//   findAllProduct(
//     @Query(new ZodValidationPipe(FilterProductSchema))
//     search: FilterProductDto,
//   ): Promise<Product[]> {
//     return this._findAllProductsUseCase.execute(search);
//   }
//   @Get(':id')
//   findOne(@Param('id') id: string): Promise<Product> {
//     return this._findProductByIdUseCase.execute(id);
//   }

//   @Patch(':id')
//   @UsePipes(new ZodValidationPipe(UpdateProductSchema))
//   update(
//     @Param('id') id: string,
//     @Body() updateProductDto: UpdateProductDto,
//   ): Promise<Product> {
//     return this._updateProductUseCase.execute(id, updateProductDto);
//   }

//   @Patch('/:id/delete')
//   softDeleteProductById(@Param('id') id: string) {
//     return this._deleteProductUseCase.execute(id);
//   }
// }
