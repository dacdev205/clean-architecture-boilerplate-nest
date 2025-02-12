import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartCreateNestedOneWithoutCartItemsInputSchema } from './CartCreateNestedOneWithoutCartItemsInputSchema';

export const CartItemCreateWithoutProductInputSchema: z.ZodType<Prisma.CartItemCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutCartItemsInputSchema)
}).strict();

export default CartItemCreateWithoutProductInputSchema;
