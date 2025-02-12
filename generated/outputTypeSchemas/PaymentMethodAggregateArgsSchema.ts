import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodWhereInputSchema } from '../inputTypeSchemas/PaymentMethodWhereInputSchema'
import { PaymentMethodOrderByWithRelationInputSchema } from '../inputTypeSchemas/PaymentMethodOrderByWithRelationInputSchema'
import { PaymentMethodWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentMethodWhereUniqueInputSchema'

export const PaymentMethodAggregateArgsSchema: z.ZodType<Prisma.PaymentMethodAggregateArgs> = z.object({
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithRelationInputSchema.array(),PaymentMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PaymentMethodAggregateArgsSchema;
