import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartCreateWithoutCartItemsInputSchema } from './CartCreateWithoutCartItemsInputSchema';
import { CartUncheckedCreateWithoutCartItemsInputSchema } from './CartUncheckedCreateWithoutCartItemsInputSchema';
import { CartCreateOrConnectWithoutCartItemsInputSchema } from './CartCreateOrConnectWithoutCartItemsInputSchema';
import { CartWhereUniqueInputSchema } from './CartWhereUniqueInputSchema';

export const CartCreateNestedOneWithoutCartItemsInputSchema: z.ZodType<Prisma.CartCreateNestedOneWithoutCartItemsInput> = z.object({
  create: z.union([ z.lazy(() => CartCreateWithoutCartItemsInputSchema),z.lazy(() => CartUncheckedCreateWithoutCartItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CartCreateOrConnectWithoutCartItemsInputSchema).optional(),
  connect: z.lazy(() => CartWhereUniqueInputSchema).optional()
}).strict();

export default CartCreateNestedOneWithoutCartItemsInputSchema;
