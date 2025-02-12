import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemIncludeSchema } from '../inputTypeSchemas/OrderItemIncludeSchema'
import { OrderItemUpdateInputSchema } from '../inputTypeSchemas/OrderItemUpdateInputSchema'
import { OrderItemUncheckedUpdateInputSchema } from '../inputTypeSchemas/OrderItemUncheckedUpdateInputSchema'
import { OrderItemWhereUniqueInputSchema } from '../inputTypeSchemas/OrderItemWhereUniqueInputSchema'
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  id: z.boolean().optional(),
  priceAtTimeOfOrder: z.boolean().optional(),
  quantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orderId: z.boolean().optional(),
  productId: z.boolean().optional(),
  order: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const OrderItemUpdateArgsSchema: z.ZodType<Prisma.OrderItemUpdateArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
  data: z.union([ OrderItemUpdateInputSchema,OrderItemUncheckedUpdateInputSchema ]),
  where: OrderItemWhereUniqueInputSchema,
}).strict() ;

export default OrderItemUpdateArgsSchema;
