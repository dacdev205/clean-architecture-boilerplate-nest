import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodWhereInputSchema } from '../inputTypeSchemas/PaymentMethodWhereInputSchema'
import { PaymentMethodOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PaymentMethodOrderByWithAggregationInputSchema'
import { PaymentMethodScalarFieldEnumSchema } from '../inputTypeSchemas/PaymentMethodScalarFieldEnumSchema'
import { PaymentMethodScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PaymentMethodScalarWhereWithAggregatesInputSchema'

export const PaymentMethodGroupByArgsSchema: z.ZodType<Prisma.PaymentMethodGroupByArgs> = z.object({
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithAggregationInputSchema.array(),PaymentMethodOrderByWithAggregationInputSchema ]).optional(),
  by: PaymentMethodScalarFieldEnumSchema.array(),
  having: PaymentMethodScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PaymentMethodGroupByArgsSchema;
