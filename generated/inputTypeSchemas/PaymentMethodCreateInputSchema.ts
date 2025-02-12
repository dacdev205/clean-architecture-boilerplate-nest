import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { OrderCreateNestedManyWithoutPaymentMethodInputSchema } from './OrderCreateNestedManyWithoutPaymentMethodInputSchema';

export const PaymentMethodCreateInputSchema: z.ZodType<Prisma.PaymentMethodCreateInput> = z.object({
  id: z.string().uuid().optional(),
  method: z.lazy(() => PaymentMethodTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutPaymentMethodInputSchema).optional()
}).strict();

export default PaymentMethodCreateInputSchema;
