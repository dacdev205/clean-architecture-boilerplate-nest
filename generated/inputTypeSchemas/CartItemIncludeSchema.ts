import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartArgsSchema } from "../outputTypeSchemas/CartArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"

export const CartItemIncludeSchema: z.ZodType<Prisma.CartItemInclude> = z.object({
  cart: z.union([z.boolean(),z.lazy(() => CartArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export default CartItemIncludeSchema;
