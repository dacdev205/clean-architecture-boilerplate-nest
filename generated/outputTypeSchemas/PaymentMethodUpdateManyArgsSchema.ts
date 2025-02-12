import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodUpdateManyMutationInputSchema } from '../inputTypeSchemas/PaymentMethodUpdateManyMutationInputSchema'
import { PaymentMethodUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PaymentMethodUncheckedUpdateManyInputSchema'
import { PaymentMethodWhereInputSchema } from '../inputTypeSchemas/PaymentMethodWhereInputSchema'

export const PaymentMethodUpdateManyArgsSchema: z.ZodType<Prisma.PaymentMethodUpdateManyArgs> = z.object({
  data: z.union([ PaymentMethodUpdateManyMutationInputSchema,PaymentMethodUncheckedUpdateManyInputSchema ]),
  where: PaymentMethodWhereInputSchema.optional(),
}).strict() ;

export default PaymentMethodUpdateManyArgsSchema;
