import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereInputSchema } from './AffiliateWhereInputSchema';

export const AffiliateListRelationFilterSchema: z.ZodType<Prisma.AffiliateListRelationFilter> = z.object({
  every: z.lazy(() => AffiliateWhereInputSchema).optional(),
  some: z.lazy(() => AffiliateWhereInputSchema).optional(),
  none: z.lazy(() => AffiliateWhereInputSchema).optional()
}).strict();

export default AffiliateListRelationFilterSchema;
