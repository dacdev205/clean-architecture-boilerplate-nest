import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { ShippingTypeSchema } from '../inputTypeSchemas/ShippingTypeSchema'

/////////////////////////////////////////
// SHIPPING METHOD SCHEMA
/////////////////////////////////////////

export const ShippingMethodSchema = z.object({
  type: ShippingTypeSchema,
  id: z.string().uuid(),
  fee: z.instanceof(Prisma.Decimal, { message: "Field 'fee' must be a Decimal. Location: ['Models', 'ShippingMethod']"}),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
})

export type ShippingMethod = z.infer<typeof ShippingMethodSchema>

export default ShippingMethodSchema;
