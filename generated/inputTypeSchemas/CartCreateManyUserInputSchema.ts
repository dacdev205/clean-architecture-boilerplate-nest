import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CartCreateManyUserInputSchema: z.ZodType<Prisma.CartCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default CartCreateManyUserInputSchema;
