import { ProductSeedData } from './seeds/product.seed';

const seeds = async () => {
  const ProductSeed = new ProductSeedData();
  await ProductSeed.main();
};
seeds();
