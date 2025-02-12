import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartCreateWithoutCartItemsInputSchema } from './CartCreateWithoutCartItemsInputSchema';
import { CartUncheckedCreateWithoutCartItemsInputSchema } from './CartUncheckedCreateWithoutCartItemsInputSchema';
import { CartCreateOrConnectWithoutCartItemsInputSchema } from './CartCreateOrConnectWithoutCartItemsInputSchema';
import { CartUpsertWithoutCartItemsInputSchema } from './CartUpsertWithoutCartItemsInputSchema';
import { CartWhereUniqueInputSchema } from './CartWhereUniqueInputSchema';
import { CartUpdateToOneWithWhereWithoutCartItemsInputSchema } from './CartUpdateToOneWithWhereWithoutCartItemsInputSchema';
import { CartUpdateWithoutCartItemsInputSchema } from './CartUpdateWithoutCartItemsInputSchema';
import { CartUncheckedUpdateWithoutCartItemsInputSchema } from './CartUncheckedUpdateWithoutCartItemsInputSchema';

export const CartUpdateOneRequiredWithoutCartItemsNestedInputSchema: z.ZodType<Prisma.CartUpdateOneRequiredWithoutCartItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CartCreateWithoutCartItemsInputSchema),z.lazy(() => CartUncheckedCreateWithoutCartItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CartCreateOrConnectWithoutCartItemsInputSchema).optional(),
  upsert: z.lazy(() => CartUpsertWithoutCartItemsInputSchema).optional(),
  connect: z.lazy(() => CartWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CartUpdateToOneWithWhereWithoutCartItemsInputSchema),z.lazy(() => CartUpdateWithoutCartItemsInputSchema),z.lazy(() => CartUncheckedUpdateWithoutCartItemsInputSchema) ]).optional(),
}).strict();

export default CartUpdateOneRequiredWithoutCartItemsNestedInputSchema;
