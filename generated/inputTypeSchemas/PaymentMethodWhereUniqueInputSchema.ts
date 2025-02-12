import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodWhereInputSchema } from './PaymentMethodWhereInputSchema';
import { EnumPaymentMethodTypeFilterSchema } from './EnumPaymentMethodTypeFilterSchema';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrderListRelationFilterSchema } from './OrderListRelationFilterSchema';

export const PaymentMethodWhereUniqueInputSchema: z.ZodType<Prisma.PaymentMethodWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PaymentMethodWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PaymentMethodWhereInputSchema),z.lazy(() => PaymentMethodWhereInputSchema).array() ]).optional(),
  method: z.union([ z.lazy(() => EnumPaymentMethodTypeFilterSchema),z.lazy(() => PaymentMethodTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export default PaymentMethodWhereUniqueInputSchema;
