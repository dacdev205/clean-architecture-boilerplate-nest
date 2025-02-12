import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  urlSource: z.string(),
  description: z.string(),
  sku: z.string(),
  price: z.number(),
  features: z.string().array(),
  specifications: z.string(),
  images: z.string().array(),
  warranty: z.string(),
  slug: z.string(),
  deliveryInfo: z.string().nullable(),
  deletedAt: z.coerce.date().nullable(),
  categoryId: z.string(),
  brandId: z.string().nullable(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
