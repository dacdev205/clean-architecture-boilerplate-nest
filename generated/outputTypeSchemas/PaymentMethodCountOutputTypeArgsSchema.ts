import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodCountOutputTypeSelectSchema } from './PaymentMethodCountOutputTypeSelectSchema';

export const PaymentMethodCountOutputTypeArgsSchema: z.ZodType<Prisma.PaymentMethodCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PaymentMethodCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PaymentMethodCountOutputTypeSelectSchema;
