import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartIncludeSchema } from '../inputTypeSchemas/CartIncludeSchema'
import { CartWhereUniqueInputSchema } from '../inputTypeSchemas/CartWhereUniqueInputSchema'
import { CartCreateInputSchema } from '../inputTypeSchemas/CartCreateInputSchema'
import { CartUncheckedCreateInputSchema } from '../inputTypeSchemas/CartUncheckedCreateInputSchema'
import { CartUpdateInputSchema } from '../inputTypeSchemas/CartUpdateInputSchema'
import { CartUncheckedUpdateInputSchema } from '../inputTypeSchemas/CartUncheckedUpdateInputSchema'
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

export const CartUpsertArgsSchema: z.ZodType<Prisma.CartUpsertArgs> = z.object({
  select: CartSelectSchema.optional(),
  include: z.lazy(() => CartIncludeSchema).optional(),
  where: CartWhereUniqueInputSchema,
  create: z.union([ CartCreateInputSchema,CartUncheckedCreateInputSchema ]),
  update: z.union([ CartUpdateInputSchema,CartUncheckedUpdateInputSchema ]),
}).strict() ;

export default CartUpsertArgsSchema;
