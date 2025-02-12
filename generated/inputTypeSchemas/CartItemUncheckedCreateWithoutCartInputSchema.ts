import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CartItemUncheckedCreateWithoutCartInputSchema: z.ZodType<Prisma.CartItemUncheckedCreateWithoutCartInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  productId: z.string()
}).strict();

export default CartItemUncheckedCreateWithoutCartInputSchema;
