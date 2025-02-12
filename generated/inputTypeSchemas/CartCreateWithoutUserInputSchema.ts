import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartItemCreateNestedManyWithoutCartInputSchema } from './CartItemCreateNestedManyWithoutCartInputSchema';

export const CartCreateWithoutUserInputSchema: z.ZodType<Prisma.CartCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutCartInputSchema).optional()
}).strict();

export default CartCreateWithoutUserInputSchema;
