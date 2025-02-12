import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCartsInputSchema } from './UserCreateNestedOneWithoutCartsInputSchema';

export const CartCreateWithoutCartItemsInputSchema: z.ZodType<Prisma.CartCreateWithoutCartItemsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartsInputSchema)
}).strict();

export default CartCreateWithoutCartItemsInputSchema;
