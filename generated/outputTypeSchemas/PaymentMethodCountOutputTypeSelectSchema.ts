import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PaymentMethodCountOutputTypeSelectSchema: z.ZodType<Prisma.PaymentMethodCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict();

export default PaymentMethodCountOutputTypeSelectSchema;
