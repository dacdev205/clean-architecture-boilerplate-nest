import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodCreateManyInputSchema } from '../inputTypeSchemas/PaymentMethodCreateManyInputSchema'

export const PaymentMethodCreateManyArgsSchema: z.ZodType<Prisma.PaymentMethodCreateManyArgs> = z.object({
  data: z.union([ PaymentMethodCreateManyInputSchema,PaymentMethodCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PaymentMethodCreateManyArgsSchema;
