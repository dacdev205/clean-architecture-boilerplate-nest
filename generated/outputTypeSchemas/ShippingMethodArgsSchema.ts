import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodSelectSchema } from '../inputTypeSchemas/ShippingMethodSelectSchema';
import { ShippingMethodIncludeSchema } from '../inputTypeSchemas/ShippingMethodIncludeSchema';

export const ShippingMethodArgsSchema: z.ZodType<Prisma.ShippingMethodDefaultArgs> = z.object({
  select: z.lazy(() => ShippingMethodSelectSchema).optional(),
  include: z.lazy(() => ShippingMethodIncludeSchema).optional(),
}).strict();

export default ShippingMethodArgsSchema;
