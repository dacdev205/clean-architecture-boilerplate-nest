import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateManyShippingMethodInputSchema } from './OrderCreateManyShippingMethodInputSchema';

export const OrderCreateManyShippingMethodInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyShippingMethodInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyShippingMethodInputSchema),z.lazy(() => OrderCreateManyShippingMethodInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OrderCreateManyShippingMethodInputEnvelopeSchema;
