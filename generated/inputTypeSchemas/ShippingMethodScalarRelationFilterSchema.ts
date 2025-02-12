import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingMethodWhereInputSchema } from './ShippingMethodWhereInputSchema';

export const ShippingMethodScalarRelationFilterSchema: z.ZodType<Prisma.ShippingMethodScalarRelationFilter> = z.object({
  is: z.lazy(() => ShippingMethodWhereInputSchema).optional(),
  isNot: z.lazy(() => ShippingMethodWhereInputSchema).optional()
}).strict();

export default ShippingMethodScalarRelationFilterSchema;
