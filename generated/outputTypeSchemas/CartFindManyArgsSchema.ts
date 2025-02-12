import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartIncludeSchema } from '../inputTypeSchemas/CartIncludeSchema'
import { CartWhereInputSchema } from '../inputTypeSchemas/CartWhereInputSchema'
import { CartOrderByWithRelationInputSchema } from '../inputTypeSchemas/CartOrderByWithRelationInputSchema'
import { CartWhereUniqueInputSchema } from '../inputTypeSchemas/CartWhereUniqueInputSchema'
import { CartScalarFieldEnumSchema } from '../inputTypeSchemas/CartScalarFieldEnumSchema'
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

export const CartFindManyArgsSchema: z.ZodType<Prisma.CartFindManyArgs> = z.object({
  select: CartSelectSchema.optional(),
  include: z.lazy(() => CartIncludeSchema).optional(),
  where: CartWhereInputSchema.optional(),
  orderBy: z.union([ CartOrderByWithRelationInputSchema.array(),CartOrderByWithRelationInputSchema ]).optional(),
  cursor: CartWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartScalarFieldEnumSchema,CartScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CartFindManyArgsSchema;
