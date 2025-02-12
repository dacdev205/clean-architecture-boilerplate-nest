import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartWhereUniqueInputSchema } from './CartWhereUniqueInputSchema';
import { CartCreateWithoutCartItemsInputSchema } from './CartCreateWithoutCartItemsInputSchema';
import { CartUncheckedCreateWithoutCartItemsInputSchema } from './CartUncheckedCreateWithoutCartItemsInputSchema';

export const CartCreateOrConnectWithoutCartItemsInputSchema: z.ZodType<Prisma.CartCreateOrConnectWithoutCartItemsInput> = z.object({
  where: z.lazy(() => CartWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CartCreateWithoutCartItemsInputSchema),z.lazy(() => CartUncheckedCreateWithoutCartItemsInputSchema) ]),
}).strict();

export default CartCreateOrConnectWithoutCartItemsInputSchema;
