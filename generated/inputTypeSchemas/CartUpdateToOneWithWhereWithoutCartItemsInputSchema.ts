import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartWhereInputSchema } from './CartWhereInputSchema';
import { CartUpdateWithoutCartItemsInputSchema } from './CartUpdateWithoutCartItemsInputSchema';
import { CartUncheckedUpdateWithoutCartItemsInputSchema } from './CartUncheckedUpdateWithoutCartItemsInputSchema';

export const CartUpdateToOneWithWhereWithoutCartItemsInputSchema: z.ZodType<Prisma.CartUpdateToOneWithWhereWithoutCartItemsInput> = z.object({
  where: z.lazy(() => CartWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CartUpdateWithoutCartItemsInputSchema),z.lazy(() => CartUncheckedUpdateWithoutCartItemsInputSchema) ]),
}).strict();

export default CartUpdateToOneWithWhereWithoutCartItemsInputSchema;
