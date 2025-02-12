import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodWhereInputSchema } from './PaymentMethodWhereInputSchema';

export const PaymentMethodScalarRelationFilterSchema: z.ZodType<Prisma.PaymentMethodScalarRelationFilter> = z.object({
  is: z.lazy(() => PaymentMethodWhereInputSchema).optional(),
  isNot: z.lazy(() => PaymentMethodWhereInputSchema).optional()
}).strict();

export default PaymentMethodScalarRelationFilterSchema;
