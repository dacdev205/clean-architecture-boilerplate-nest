import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateManyUserInputSchema } from './AffiliateCreateManyUserInputSchema';

export const AffiliateCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AffiliateCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AffiliateCreateManyUserInputSchema),z.lazy(() => AffiliateCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AffiliateCreateManyUserInputEnvelopeSchema;
