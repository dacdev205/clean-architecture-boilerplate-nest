import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemWhereInputSchema } from '../inputTypeSchemas/CartItemWhereInputSchema'

export const CartItemDeleteManyArgsSchema: z.ZodType<Prisma.CartItemDeleteManyArgs> = z.object({
  where: CartItemWhereInputSchema.optional(),
}).strict() ;

export default CartItemDeleteManyArgsSchema;
