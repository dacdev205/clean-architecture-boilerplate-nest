import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CartItemCreateManyInputSchema: z.ZodType<Prisma.CartItemCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  productId: z.string(),
  cartId: z.string()
}).strict();

export default CartItemCreateManyInputSchema;
