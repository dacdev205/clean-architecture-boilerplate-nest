import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodIncludeSchema } from '../inputTypeSchemas/PaymentMethodIncludeSchema'
import { PaymentMethodCreateInputSchema } from '../inputTypeSchemas/PaymentMethodCreateInputSchema'
import { PaymentMethodUncheckedCreateInputSchema } from '../inputTypeSchemas/PaymentMethodUncheckedCreateInputSchema'
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { PaymentMethodCountOutputTypeArgsSchema } from "../outputTypeSchemas/PaymentMethodCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PaymentMethodSelectSchema: z.ZodType<Prisma.PaymentMethodSelect> = z.object({
  id: z.boolean().optional(),
  method: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PaymentMethodCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PaymentMethodCreateArgsSchema: z.ZodType<Prisma.PaymentMethodCreateArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  include: z.lazy(() => PaymentMethodIncludeSchema).optional(),
  data: z.union([ PaymentMethodCreateInputSchema,PaymentMethodUncheckedCreateInputSchema ]),
}).strict() ;

export default PaymentMethodCreateArgsSchema;
