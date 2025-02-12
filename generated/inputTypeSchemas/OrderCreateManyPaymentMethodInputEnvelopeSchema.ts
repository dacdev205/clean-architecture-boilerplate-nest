import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateManyPaymentMethodInputSchema } from './OrderCreateManyPaymentMethodInputSchema';

export const OrderCreateManyPaymentMethodInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyPaymentMethodInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyPaymentMethodInputSchema),z.lazy(() => OrderCreateManyPaymentMethodInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OrderCreateManyPaymentMethodInputEnvelopeSchema;
