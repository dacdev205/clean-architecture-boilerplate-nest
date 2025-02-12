import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';

export const NestedEnumPaymentMethodTypeFilterSchema: z.ZodType<Prisma.NestedEnumPaymentMethodTypeFilter> = z.object({
  equals: z.lazy(() => PaymentMethodTypeSchema).optional(),
  in: z.lazy(() => PaymentMethodTypeSchema).array().optional(),
  notIn: z.lazy(() => PaymentMethodTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentMethodTypeSchema),z.lazy(() => NestedEnumPaymentMethodTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumPaymentMethodTypeFilterSchema;
