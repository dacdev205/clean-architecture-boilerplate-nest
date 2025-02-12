import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CartItemUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cartId: z.string()
}).strict();

export default CartItemUncheckedCreateWithoutProductInputSchema;
