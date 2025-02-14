import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: z.instanceof(Prisma.Decimal, { message: "Field 'price' must be a Decimal. Location: ['Models', 'Product']"}),
  quantity: z.number().int(),
  slug: z.string(),
  discount: z.instanceof(Prisma.Decimal, { message: "Field 'discount' must be a Decimal. Location: ['Models', 'Product']"}).nullish(),
  url_source: z.string(),
  images: z.string().array(),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  category_id: z.string(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
