import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutCartInputSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInputSchema';

export const CartUncheckedCreateInputSchema: z.ZodType<Prisma.CartUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputSchema).optional()
}).strict();

export default CartUncheckedCreateInputSchema;
