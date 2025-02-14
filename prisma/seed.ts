import { ProductSeedData } from './seeds/product.seed';
async function seed() {
  const ProductSeed = new ProductSeedData();
  await ProductSeed.main();
}
seed();
