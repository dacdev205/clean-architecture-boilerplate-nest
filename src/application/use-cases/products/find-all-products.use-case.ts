import { FilterProductDto } from 'src/application/dtos/products';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductRepository } from '../../repositories/products.repositories';

@Injectable()
export class FindAllProductsUseCase {
  constructor(private readonly _productRepository: ProductRepository) {}
  async findAll(filter: FilterProductDto): Promise<any> {
    const { search, category, brand, sort } = filter;

    const where: Prisma.ProductWhereInput = {
      deletedAt: { equals: null },
      OR: search
        ? [
            { title: { contains: search, mode: 'insensitive' } },
            { sku: { contains: search, mode: 'insensitive' } },
            {
              category: {
                name: { contains: search, mode: 'insensitive' },
                deletedAt: { equals: null },
              },
            },
            {
              brand: {
                name: { contains: search, mode: 'insensitive' },
                deletedAt: { equals: null },
              },
            },
          ]
        : undefined,
      AND: [
        category
          ? {
              category: {
                name: { equals: category },
                deletedAt: { equals: null },
              },
            }
          : undefined,
        brand
          ? {
              brand: {
                name: { equals: brand },
                deletedAt: { equals: null },
              },
            }
          : undefined,
      ].filter(Boolean),
    };

    const orderBy = sort?.map(({ field, value }) => ({ [field]: value })) || [];

    const products = await this._productRepository.findAll({
      select: {
        id: true,
        title: true,
        sku: true,
        price: true,
        category: { select: { id: true, name: true, slug: true } },
        brand: { select: { id: true, name: true, slug: true } },
      },
      where,
      orderBy,
    });

    return {
      count: products.length,
      data: products,
    };
  }
}
