import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CartScalarWhereInputSchema: z.ZodType<Prisma.CartScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CartScalarWhereInputSchema),z.lazy(() => CartScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CartScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CartScalarWhereInputSchema),z.lazy(() => CartScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default CartScalarWhereInputSchema;
