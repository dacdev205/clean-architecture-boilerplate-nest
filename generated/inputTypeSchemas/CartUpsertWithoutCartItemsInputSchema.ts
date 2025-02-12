import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartUpdateWithoutCartItemsInputSchema } from './CartUpdateWithoutCartItemsInputSchema';
import { CartUncheckedUpdateWithoutCartItemsInputSchema } from './CartUncheckedUpdateWithoutCartItemsInputSchema';
import { CartCreateWithoutCartItemsInputSchema } from './CartCreateWithoutCartItemsInputSchema';
import { CartUncheckedCreateWithoutCartItemsInputSchema } from './CartUncheckedCreateWithoutCartItemsInputSchema';
import { CartWhereInputSchema } from './CartWhereInputSchema';

export const CartUpsertWithoutCartItemsInputSchema: z.ZodType<Prisma.CartUpsertWithoutCartItemsInput> = z.object({
  update: z.union([ z.lazy(() => CartUpdateWithoutCartItemsInputSchema),z.lazy(() => CartUncheckedUpdateWithoutCartItemsInputSchema) ]),
  create: z.union([ z.lazy(() => CartCreateWithoutCartItemsInputSchema),z.lazy(() => CartUncheckedCreateWithoutCartItemsInputSchema) ]),
  where: z.lazy(() => CartWhereInputSchema).optional()
}).strict();

export default CartUpsertWithoutCartItemsInputSchema;
