import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemWhereInputSchema } from '../inputTypeSchemas/OrderItemWhereInputSchema'

export const OrderItemDeleteManyArgsSchema: z.ZodType<Prisma.OrderItemDeleteManyArgs> = z.object({
  where: OrderItemWhereInputSchema.optional(),
}).strict() ;

export default OrderItemDeleteManyArgsSchema;
