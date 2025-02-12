import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodCountOutputTypeSelectSchema } from './ShippingMethodCountOutputTypeSelectSchema';

export const ShippingMethodCountOutputTypeArgsSchema: z.ZodType<Prisma.ShippingMethodCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ShippingMethodCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ShippingMethodCountOutputTypeSelectSchema;
