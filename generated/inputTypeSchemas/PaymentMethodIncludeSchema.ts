import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { PaymentMethodCountOutputTypeArgsSchema } from "../outputTypeSchemas/PaymentMethodCountOutputTypeArgsSchema"

export const PaymentMethodIncludeSchema: z.ZodType<Prisma.PaymentMethodInclude> = z.object({
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PaymentMethodCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PaymentMethodIncludeSchema;
