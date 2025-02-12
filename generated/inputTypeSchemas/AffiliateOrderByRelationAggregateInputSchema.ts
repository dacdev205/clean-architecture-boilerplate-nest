import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AffiliateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AffiliateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AffiliateOrderByRelationAggregateInputSchema;
