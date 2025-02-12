import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingTypeSchema } from './ShippingTypeSchema';

export const NestedEnumShippingTypeFilterSchema: z.ZodType<Prisma.NestedEnumShippingTypeFilter> = z.object({
  equals: z.lazy(() => ShippingTypeSchema).optional(),
  in: z.lazy(() => ShippingTypeSchema).array().optional(),
  notIn: z.lazy(() => ShippingTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ShippingTypeSchema),z.lazy(() => NestedEnumShippingTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumShippingTypeFilterSchema;
