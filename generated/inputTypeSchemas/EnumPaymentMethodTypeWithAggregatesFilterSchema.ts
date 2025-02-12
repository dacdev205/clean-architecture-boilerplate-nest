import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { NestedEnumPaymentMethodTypeWithAggregatesFilterSchema } from './NestedEnumPaymentMethodTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPaymentMethodTypeFilterSchema } from './NestedEnumPaymentMethodTypeFilterSchema';

export const EnumPaymentMethodTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPaymentMethodTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PaymentMethodTypeSchema).optional(),
  in: z.lazy(() => PaymentMethodTypeSchema).array().optional(),
  notIn: z.lazy(() => PaymentMethodTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentMethodTypeSchema),z.lazy(() => NestedEnumPaymentMethodTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPaymentMethodTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPaymentMethodTypeFilterSchema).optional()
}).strict();

export default EnumPaymentMethodTypeWithAggregatesFilterSchema;
