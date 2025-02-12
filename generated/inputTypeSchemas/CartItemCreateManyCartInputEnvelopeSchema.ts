import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CartItemCreateManyCartInputSchema } from './CartItemCreateManyCartInputSchema';

export const CartItemCreateManyCartInputEnvelopeSchema: z.ZodType<Prisma.CartItemCreateManyCartInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CartItemCreateManyCartInputSchema),z.lazy(() => CartItemCreateManyCartInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CartItemCreateManyCartInputEnvelopeSchema;
