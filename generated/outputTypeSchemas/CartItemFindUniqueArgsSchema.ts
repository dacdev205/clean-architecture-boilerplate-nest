import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartItemIncludeSchema } from '../inputTypeSchemas/CartItemIncludeSchema'
import { CartItemWhereUniqueInputSchema } from '../inputTypeSchemas/CartItemWhereUniqueInputSchema'
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

export const CartItemFindUniqueArgsSchema: z.ZodType<Prisma.CartItemFindUniqueArgs> = z.object({
  select: CartItemSelectSchema.optional(),
  include: z.lazy(() => CartItemIncludeSchema).optional(),
  where: CartItemWhereUniqueInputSchema,
}).strict() ;

export default CartItemFindUniqueArgsSchema;
