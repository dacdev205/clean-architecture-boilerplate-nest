import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateManyAffiliateInputSchema } from './OrderCreateManyAffiliateInputSchema';

export const OrderCreateManyAffiliateInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyAffiliateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyAffiliateInputSchema),z.lazy(() => OrderCreateManyAffiliateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OrderCreateManyAffiliateInputEnvelopeSchema;
