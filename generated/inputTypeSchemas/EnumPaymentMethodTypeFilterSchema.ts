import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { NestedEnumPaymentMethodTypeFilterSchema } from './NestedEnumPaymentMethodTypeFilterSchema';

export const EnumPaymentMethodTypeFilterSchema: z.ZodType<Prisma.EnumPaymentMethodTypeFilter> = z.object({
  equals: z.lazy(() => PaymentMethodTypeSchema).optional(),
  in: z.lazy(() => PaymentMethodTypeSchema).array().optional(),
  notIn: z.lazy(() => PaymentMethodTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PaymentMethodTypeSchema),z.lazy(() => NestedEnumPaymentMethodTypeFilterSchema) ]).optional(),
}).strict();

export default EnumPaymentMethodTypeFilterSchema;
