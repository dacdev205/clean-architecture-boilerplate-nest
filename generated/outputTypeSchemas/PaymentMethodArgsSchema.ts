import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodSelectSchema } from '../inputTypeSchemas/PaymentMethodSelectSchema';
import { PaymentMethodIncludeSchema } from '../inputTypeSchemas/PaymentMethodIncludeSchema';

export const PaymentMethodArgsSchema: z.ZodType<Prisma.PaymentMethodDefaultArgs> = z.object({
  select: z.lazy(() => PaymentMethodSelectSchema).optional(),
  include: z.lazy(() => PaymentMethodIncludeSchema).optional(),
}).strict();

export default PaymentMethodArgsSchema;
