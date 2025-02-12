import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CartSelectSchema } from '../inputTypeSchemas/CartSelectSchema';
import { CartIncludeSchema } from '../inputTypeSchemas/CartIncludeSchema';

export const CartArgsSchema: z.ZodType<Prisma.CartDefaultArgs> = z.object({
  select: z.lazy(() => CartSelectSchema).optional(),
  include: z.lazy(() => CartIncludeSchema).optional(),
}).strict();

export default CartArgsSchema;
