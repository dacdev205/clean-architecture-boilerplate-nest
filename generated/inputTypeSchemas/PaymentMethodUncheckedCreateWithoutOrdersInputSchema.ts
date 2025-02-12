import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';

export const PaymentMethodUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.PaymentMethodUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().uuid().optional(),
  method: z.lazy(() => PaymentMethodTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PaymentMethodUncheckedCreateWithoutOrdersInputSchema;
