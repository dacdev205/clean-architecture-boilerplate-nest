import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingTypeSchema } from './ShippingTypeSchema';
import { NestedEnumShippingTypeWithAggregatesFilterSchema } from './NestedEnumShippingTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumShippingTypeFilterSchema } from './NestedEnumShippingTypeFilterSchema';

export const EnumShippingTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumShippingTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ShippingTypeSchema).optional(),
  in: z.lazy(() => ShippingTypeSchema).array().optional(),
  notIn: z.lazy(() => ShippingTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ShippingTypeSchema),z.lazy(() => NestedEnumShippingTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumShippingTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumShippingTypeFilterSchema).optional()
}).strict();

export default EnumShippingTypeWithAggregatesFilterSchema;
