import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartItemCreateNestedManyWithoutCartInputSchema } from './CartItemCreateNestedManyWithoutCartInputSchema';
import { UserCreateNestedOneWithoutCartsInputSchema } from './UserCreateNestedOneWithoutCartsInputSchema';

export const CartCreateInputSchema: z.ZodType<Prisma.CartCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cartItems: z.lazy(() => CartItemCreateNestedManyWithoutCartInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartsInputSchema)
}).strict();

export default CartCreateInputSchema;
