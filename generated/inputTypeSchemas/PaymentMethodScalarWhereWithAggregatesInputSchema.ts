import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumPaymentMethodTypeWithAggregatesFilterSchema } from './EnumPaymentMethodTypeWithAggregatesFilterSchema';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PaymentMethodScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PaymentMethodScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema),z.lazy(() => PaymentMethodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  method: z.union([ z.lazy(() => EnumPaymentMethodTypeWithAggregatesFilterSchema),z.lazy(() => PaymentMethodTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PaymentMethodScalarWhereWithAggregatesInputSchema;
