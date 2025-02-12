import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CartCountOutputTypeSelectSchema: z.ZodType<Prisma.CartCountOutputTypeSelect> = z.object({
  cartItems: z.boolean().optional(),
}).strict();

export default CartCountOutputTypeSelectSchema;
