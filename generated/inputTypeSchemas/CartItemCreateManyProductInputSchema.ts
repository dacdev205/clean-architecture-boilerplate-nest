import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CartItemCreateManyProductInputSchema: z.ZodType<Prisma.CartItemCreateManyProductInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cartId: z.string()
}).strict();

export default CartItemCreateManyProductInputSchema;
