import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateManyAddressInputSchema } from './OrderCreateManyAddressInputSchema';

export const OrderCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyAddressInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyAddressInputSchema),z.lazy(() => OrderCreateManyAddressInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OrderCreateManyAddressInputEnvelopeSchema;
