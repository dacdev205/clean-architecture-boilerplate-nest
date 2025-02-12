import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { ShippingMethodCountOutputTypeArgsSchema } from "../outputTypeSchemas/ShippingMethodCountOutputTypeArgsSchema"

export const ShippingMethodSelectSchema: z.ZodType<Prisma.ShippingMethodSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  fee: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ShippingMethodCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ShippingMethodSelectSchema;
