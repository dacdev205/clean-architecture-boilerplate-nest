import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutCartInputSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInputSchema';

export const CartUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CartUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cartItems: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputSchema).optional()
}).strict();

export default CartUncheckedCreateWithoutUserInputSchema;
