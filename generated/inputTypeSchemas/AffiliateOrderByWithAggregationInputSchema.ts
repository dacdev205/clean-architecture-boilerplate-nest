import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AffiliateCountOrderByAggregateInputSchema } from './AffiliateCountOrderByAggregateInputSchema';
import { AffiliateMaxOrderByAggregateInputSchema } from './AffiliateMaxOrderByAggregateInputSchema';
import { AffiliateMinOrderByAggregateInputSchema } from './AffiliateMinOrderByAggregateInputSchema';

export const AffiliateOrderByWithAggregationInputSchema: z.ZodType<Prisma.AffiliateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  businessName: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AffiliateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AffiliateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AffiliateMinOrderByAggregateInputSchema).optional()
}).strict();

export default AffiliateOrderByWithAggregationInputSchema;
