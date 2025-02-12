import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/CartItemUpdateManyMutationInputSchema'
import { CartItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CartItemUncheckedUpdateManyInputSchema'
import { CartItemWhereInputSchema } from '../inputTypeSchemas/CartItemWhereInputSchema'

export const CartItemUpdateManyArgsSchema: z.ZodType<Prisma.CartItemUpdateManyArgs> = z.object({
  data: z.union([ CartItemUpdateManyMutationInputSchema,CartItemUncheckedUpdateManyInputSchema ]),
  where: CartItemWhereInputSchema.optional(),
}).strict() ;

export default CartItemUpdateManyArgsSchema;
