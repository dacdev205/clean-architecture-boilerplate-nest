import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemIncludeSchema } from '../inputTypeSchemas/CartItemIncludeSchema'
import { CartItemWhereInputSchema } from '../inputTypeSchemas/CartItemWhereInputSchema'
import { CartItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/CartItemOrderByWithRelationInputSchema'
import { CartItemWhereUniqueInputSchema } from '../inputTypeSchemas/CartItemWhereUniqueInputSchema'
import { CartItemScalarFieldEnumSchema } from '../inputTypeSchemas/CartItemScalarFieldEnumSchema'
import { CartArgsSchema } from "../outputTypeSchemas/CartArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CartItemSelectSchema: z.ZodType<Prisma.CartItemSelect> = z.object({
  id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  productId: z.boolean().optional(),
  cartId: z.boolean().optional(),
  cart: z.union([z.boolean(),z.lazy(() => CartArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const CartItemFindFirstArgsSchema: z.ZodType<Prisma.CartItemFindFirstArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: z.lazy(() => CartItemIncludeSchema).optional(),
  where: CartItemWhereInputSchema.optional(),
  orderBy: z.union([ CartItemOrderByWithRelationInputSchema.array(),CartItemOrderByWithRelationInputSchema ]).optional(),
  cursor: CartItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CartItemScalarFieldEnumSchema,CartItemScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CartItemFindFirstArgsSchema;
