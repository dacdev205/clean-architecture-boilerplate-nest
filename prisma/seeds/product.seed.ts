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
  price?: number;
  slug: string | null;
  images: string[] | null;
  quanlity: number | 0;
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
      return {
        name: categoryInput.name,
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

  async main() {
    const dirName = 'product-raw-data';
    const seedFileNames = this.readFilesFromDir(dirName);

    if (seedFileNames.length === 0) {
      throw new NotFoundException(FILE_NOT_FOUND);
    }

    const categoryInputs = seedFileNames.map((fileName) => ({
      name: fileName.replace('.json', ''),
    }));

    const categories = await this.createCategories(categoryInputs);
    console.log(categories);
  }
}
