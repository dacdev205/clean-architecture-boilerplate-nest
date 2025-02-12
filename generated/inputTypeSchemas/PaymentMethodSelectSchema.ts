import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { PaymentMethodCountOutputTypeArgsSchema } from "../outputTypeSchemas/PaymentMethodCountOutputTypeArgsSchema"

export const PaymentMethodSelectSchema: z.ZodType<Prisma.PaymentMethodSelect> = z.object({
  id: z.boolean().optional(),
  method: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PaymentMethodCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PaymentMethodSelectSchema;
