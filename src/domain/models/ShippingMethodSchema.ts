import ShippingTypeSchema from 'generated/inputTypeSchemas/ShippingTypeSchema';
import { z } from 'zod';
import { Prisma } from '@prisma/client';

/////////////////////////////////////////
// SHIPPING METHOD SCHEMA
/////////////////////////////////////////

export const ShippingMethodSchema = z.object({
  type: ShippingTypeSchema,
  id: z.string().uuid(),
  fee: z.instanceof(Prisma.Decimal, {
    message:
      "Field 'fee' must be a Decimal. Location: ['Models', 'ShippingMethod']",
  }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ShippingMethod = z.infer<typeof ShippingMethodSchema>;

export default ShippingMethodSchema;
