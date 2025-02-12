import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodWhereInputSchema } from '../inputTypeSchemas/PaymentMethodWhereInputSchema'

export const PaymentMethodDeleteManyArgsSchema: z.ZodType<Prisma.PaymentMethodDeleteManyArgs> = z.object({
  where: PaymentMethodWhereInputSchema.optional(),
}).strict() ;

export default PaymentMethodDeleteManyArgsSchema;
