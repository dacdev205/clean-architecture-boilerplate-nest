import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CartCreateManyInputSchema: z.ZodType<Prisma.CartCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export default CartCreateManyInputSchema;
