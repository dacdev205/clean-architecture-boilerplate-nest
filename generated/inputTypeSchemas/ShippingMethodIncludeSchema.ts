import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { ShippingMethodCountOutputTypeArgsSchema } from "../outputTypeSchemas/ShippingMethodCountOutputTypeArgsSchema"

export const ShippingMethodIncludeSchema: z.ZodType<Prisma.ShippingMethodInclude> = z.object({
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ShippingMethodCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ShippingMethodIncludeSchema;
