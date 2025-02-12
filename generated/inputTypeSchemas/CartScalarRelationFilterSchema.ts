import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartWhereInputSchema } from './CartWhereInputSchema';

export const CartScalarRelationFilterSchema: z.ZodType<Prisma.CartScalarRelationFilter> = z.object({
  is: z.lazy(() => CartWhereInputSchema).optional(),
  isNot: z.lazy(() => CartWhereInputSchema).optional()
}).strict();

export default CartScalarRelationFilterSchema;
