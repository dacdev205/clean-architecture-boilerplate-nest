import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartIncludeSchema } from '../inputTypeSchemas/CartIncludeSchema'
import { CartUpdateInputSchema } from '../inputTypeSchemas/CartUpdateInputSchema'
import { CartUncheckedUpdateInputSchema } from '../inputTypeSchemas/CartUncheckedUpdateInputSchema'
import { CartWhereUniqueInputSchema } from '../inputTypeSchemas/CartWhereUniqueInputSchema'
import { CartItemFindManyArgsSchema } from "../outputTypeSchemas/CartItemFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CartCountOutputTypeArgsSchema } from "../outputTypeSchemas/CartCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CartSelectSchema: z.ZodType<Prisma.CartSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  cartItems: z.union([z.boolean(),z.lazy(() => CartItemFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CartCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CartUpdateArgsSchema: z.ZodType<Prisma.CartUpdateArgs> = z.object({
  select: CartSelectSchema.optional(),
  include: z.lazy(() => CartIncludeSchema).optional(),
  data: z.union([ CartUpdateInputSchema,CartUncheckedUpdateInputSchema ]),
  where: CartWhereUniqueInputSchema,
}).strict() ;

export default CartUpdateArgsSchema;
