import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ShippingMethodCountOutputTypeSelectSchema: z.ZodType<Prisma.ShippingMethodCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict();

export default ShippingMethodCountOutputTypeSelectSchema;
