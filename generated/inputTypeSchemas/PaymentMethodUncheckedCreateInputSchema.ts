import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { OrderUncheckedCreateNestedManyWithoutPaymentMethodInputSchema } from './OrderUncheckedCreateNestedManyWithoutPaymentMethodInputSchema';

export const PaymentMethodUncheckedCreateInputSchema: z.ZodType<Prisma.PaymentMethodUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  method: z.lazy(() => PaymentMethodTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutPaymentMethodInputSchema).optional()
}).strict();

export default PaymentMethodUncheckedCreateInputSchema;
