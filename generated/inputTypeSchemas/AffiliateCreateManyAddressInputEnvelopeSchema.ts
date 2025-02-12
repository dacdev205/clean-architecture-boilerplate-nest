import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateManyAddressInputSchema } from './AffiliateCreateManyAddressInputSchema';

export const AffiliateCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.AffiliateCreateManyAddressInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AffiliateCreateManyAddressInputSchema),z.lazy(() => AffiliateCreateManyAddressInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AffiliateCreateManyAddressInputEnvelopeSchema;
