import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ShippingMethodCountOrderByAggregateInputSchema } from './ShippingMethodCountOrderByAggregateInputSchema';
import { ShippingMethodAvgOrderByAggregateInputSchema } from './ShippingMethodAvgOrderByAggregateInputSchema';
import { ShippingMethodMaxOrderByAggregateInputSchema } from './ShippingMethodMaxOrderByAggregateInputSchema';
import { ShippingMethodMinOrderByAggregateInputSchema } from './ShippingMethodMinOrderByAggregateInputSchema';
import { ShippingMethodSumOrderByAggregateInputSchema } from './ShippingMethodSumOrderByAggregateInputSchema';

export const ShippingMethodOrderByWithAggregationInputSchema: z.ZodType<Prisma.ShippingMethodOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  fee: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ShippingMethodCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ShippingMethodAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ShippingMethodMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ShippingMethodMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ShippingMethodSumOrderByAggregateInputSchema).optional()
}).strict();

export default ShippingMethodOrderByWithAggregationInputSchema;
