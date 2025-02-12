import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { NotFoundException } from '@nestjs/common';
import { Brand, Category, Prisma, PrismaClient } from '@prisma/client';
import { createSlug } from '../../src/common/utils/create-slug';
// import { check_empty_object } from '../../src/common/utils/check-empty-object';
import { FILE_NOT_FOUND } from '../../src/content/errors/read-file.error';

interface CreateCategoryInput {
  name: string;
}
interface Raw_Data {
  title: string | null;
  url_source: string | null;
  description?: string;
  sku: string | null;
  brand: string | null;
  price?: number;
  features?: string[];
  specifications: string | null;
  images: string[] | null;
  warranty?: string;
  delivery_information: string | null;
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
        data: categoryData,
      });
      categories.push(category);
    }

    return categories;
  }

  async createBrand(
    brandsData: Array<Prisma.BrandCreateInput>,
  ): Promise<Array<Brand>> {
    const brands: Array<Brand> = [];
    for (let i = 0; i < brandsData.length; i++) {
      const brandData = brandsData[i];
      const existingBrand = await this._prismaClient.brand.findFirst({
        where: { name: brandData.name },
      });
      if (existingBrand) {
        console.log('Skipping existing Brand: ', brandData.name);
        continue;
      }
      await this._prismaClient.brand.create({ data: brandData });
    }
    return brands;
  }

  async createProduct(
    productsData: Array<Prisma.ProductCreateInput>,
  ): Promise<void> {
    for (let i = 0; i < productsData.length; i++) {
      const productData = productsData[i];
      const existingProduct = await this._prismaClient.product.findFirst({
        where: { title: productData.title },
      });
      if (existingProduct) {
        console.log('Skipping existing Product: ', productData.title);
        continue;
      }
      await this._prismaClient.product.create({ data: productData });
    }
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

    for (const category of categories) {
      const filePath = resolve(__dirname, dirName, `${category.name}.json`);
      const productsData = this.readFilesContent(filePath);

      const requiredStringFields = [
        'title',
        'url_source',
        'sku',
        'specifications',
      ];
      const requiredListFields = ['images'];

      const cleanedProducts: Array<Prisma.ProductCreateInput> = [];
      const brandNames: Set<string> = new Set();

      for (const product of productsData) {
        const missingRequiredFields = requiredStringFields.some(
          (field) => !product[field],
        );
        const missingListFields = requiredListFields.some(
          (field) => !product[field] || product[field].length === 0,
        );

        if (missingRequiredFields || missingListFields) {
          console.log(
            `Skipping product due to missing required fields: ${product.title}`,
          );
          continue;
        }

        const existingProduct = await this._prismaClient.product.findFirst({
          where: { sku: product.sku as string },
        });
        if (existingProduct) {
          console.log(
            `Skipping product with missing URL source or SKU: ${product.title}`,
          );
          continue;
        }

        const brandSlug = product.brand
          ? this.generateSlug(product.brand)
          : null;
        // Check if the brand exists in the database
        const existingBrand = brandSlug
          ? await this._prismaClient.brand.findFirst({
              where: { slug: brandSlug },
            })
          : null;
        cleanedProducts.push({
          title: product.title as string,
          sku: product.sku as string,
          price: product.price || 0,
          warranty: product.warranty,
          urlSource: product.url_source as string,
          description: product.description,
          features: product.features,
          deliveryInfo: product.delivery_information,
          images: product.images || [],
          category: { connect: { id: category.id } },
          brand: existingBrand
            ? { connect: { id: existingBrand.id } }
            : undefined,
          specifications: product.specifications as string,
          slug: this.generateSlug(product.title as string),
        });

        if (product.brand && !brandNames.has(product.brand)) {
          brandNames.add(product.brand);
        }
      }

      const brandData = Array.from(brandNames).map((brandName) => ({
        name: brandName,
        slug: this.generateSlug(brandName),
      }));

      await this.createBrand(brandData);
      await this.createProduct(cleanedProducts);
    }
  }
}
