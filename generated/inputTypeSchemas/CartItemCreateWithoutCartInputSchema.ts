import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutCartItemInputSchema } from './ProductCreateNestedOneWithoutCartItemInputSchema';

export const CartItemCreateWithoutCartInputSchema: z.ZodType<Prisma.CartItemCreateWithoutCartInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutCartItemInputSchema)
}).strict();

export default CartItemCreateWithoutCartInputSchema;
