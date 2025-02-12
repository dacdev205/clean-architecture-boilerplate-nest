import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartCreateNestedOneWithoutCartItemsInputSchema } from './CartCreateNestedOneWithoutCartItemsInputSchema';
import { ProductCreateNestedOneWithoutCartItemInputSchema } from './ProductCreateNestedOneWithoutCartItemInputSchema';

export const CartItemCreateInputSchema: z.ZodType<Prisma.CartItemCreateInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cart: z.lazy(() => CartCreateNestedOneWithoutCartItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutCartItemInputSchema)
}).strict();

export default CartItemCreateInputSchema;
