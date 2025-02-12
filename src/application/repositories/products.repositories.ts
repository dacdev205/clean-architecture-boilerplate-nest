import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async create(requestBody: Prisma.ProductCreateArgs): Promise<Product> {
    return this._prisma.product.create(requestBody);
  }
  async findAll(args?: Prisma.ProductFindManyArgs): Promise<Product[]> {
    return this._prisma.product.findMany(args);
  }

  async findById(id: Prisma.ProductFindUniqueArgs): Promise<Product | null> {
    return this._prisma.product.findUnique(id);
  }
  async findFirst(id: Prisma.ProductFindFirstArgs): Promise<Product | null> {
    return this._prisma.product.findFirst(id);
  }
  async update(args: Prisma.ProductUpdateArgs): Promise<Product> {
    return this._prisma.product.update(args);
  }
}
