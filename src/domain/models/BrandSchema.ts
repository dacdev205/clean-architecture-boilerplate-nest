import { z } from 'zod';

/////////////////////////////////////////
// BRAND SCHEMA
/////////////////////////////////////////

export const BrandSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Brand = z.infer<typeof BrandSchema>

export default BrandSchema;
