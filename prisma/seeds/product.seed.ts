import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { NotFoundException } from '@nestjs/common';
import { Category, Prisma, PrismaClient } from '@prisma/client';
import { createSlug } from '../../src/common/utils/create-slug';
// import { check_empty_object } from '../../src/common/utils/check-empty-object';
import { FILE_NOT_FOUND } from '../../src/content/errors/read-file.error';

interface CreateCategoryInput {
  name: string;
}
interface Raw_Data {
  name: string | null;
  url_source: string | null;
  price?: string | number;
  images: string[] | null;
  quantity: number | 0;
}

export class ProductSeedData {
  private _prismaClient: PrismaClient;

  constructor() {
    this._prismaClient = new PrismaClient();
  }

  readFilesFromDir(dirName: string): Array<string> {
    const dirPath = resolve(__dirname, dirName);
    return readdirSync(dirPath);
  }

  readFilesContent(filePath: string): Array<Raw_Data> {
    const data = readFileSync(filePath);
    return JSON.parse(data.toString());
  }

  generateSlug(name: string): string {
    return createSlug(name);
  }

  async createCategories(
    categoryInputs: Array<CreateCategoryInput>,
  ): Promise<Array<Category>> {
    const categoriesData = categoryInputs.map((categoryInput) => {
      const slug = this.generateSlug(categoryInput.name);
      return {
        name: categoryInput.name,
        slug,
      };
    });

    const categories: Array<Category> = [];
    for (let i = 0; i < categoriesData.length; i++) {
      const categoryData = categoriesData[i];
      const existingCategory = await this._prismaClient.category.findFirst({
        where: { name: categoryData.name },
      });

      if (existingCategory) {
        console.log('Skipping existing Category: ', categoryData.name);
        continue;
      }

      const category = await this._prismaClient.category.create({
        data: categoryData as Prisma.CategoryCreateInput,
      });
      categories.push(category);
    }

    return categories;
  }
  async createProduct(
    productData: Array<Prisma.ProductCreateInput>,
  ): Promise<void> {
    for (let i = 0; i < productData.length; i++) {
      const product = productData[i];
      const existedProduct = await this._prismaClient.product.findFirst({
        where: { name: product.name, slug: product.slug },
      });
      if (existedProduct) {
        console.log('Skipping existing Product: ', product.name);
        continue;
      }
      await this._prismaClient.product.create({
        data: product,
      });
    }
  }
  async main() {
    const dirName = './data/product-raw-data';
    const seedFileNames = this.readFilesFromDir(dirName);

    if (seedFileNames.length === 0) {
      throw new NotFoundException(FILE_NOT_FOUND);
    }

    const categoryInputs = seedFileNames.map((fileName) => ({
      name: fileName.replace('.json', ''),
    }));

    const categories = await this.createCategories(categoryInputs);
    for (const category of categories) {
      const filePath = resolve(__dirname, dirName, `${category.name}.json`);
      const productData = this.readFilesContent(filePath);

      const requiredStringFields = ['name', 'url_source'];

      const cleanedProductData: Array<Prisma.ProductCreateInput> = [];
      for (const product of productData) {
        const missReiredFields = requiredStringFields.some(
          (field) => !product[field],
        );
        if (missReiredFields) {
          console.log('Skipping Product dont have required field');
          continue;
        }
        cleanedProductData.push({
          name: product.name as string,
          url_source: product.url_source as string,
          price: parseFloat(product.price?.toString() ?? '0'),
          slug: this.generateSlug(product.name as string),
          quantity: product.quantity,
          images: product.images as string[],
          category: {
            connect: {
              id: category.id,
            },
          },
        });
        await this.createProduct(cleanedProductData);
      }
    }
  }
}
