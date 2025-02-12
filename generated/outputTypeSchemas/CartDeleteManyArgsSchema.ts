import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartWhereInputSchema } from '../inputTypeSchemas/CartWhereInputSchema'

export const CartDeleteManyArgsSchema: z.ZodType<Prisma.CartDeleteManyArgs> = z.object({
  where: CartWhereInputSchema.optional(),
}).strict() ;

export default CartDeleteManyArgsSchema;
