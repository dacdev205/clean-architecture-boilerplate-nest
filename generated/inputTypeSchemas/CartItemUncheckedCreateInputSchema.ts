import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CartItemUncheckedCreateInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  productId: z.string(),
  cartId: z.string()
}).strict();

export default CartItemUncheckedCreateInputSchema;
