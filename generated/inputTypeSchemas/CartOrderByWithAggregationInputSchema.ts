import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CartCountOrderByAggregateInputSchema } from './CartCountOrderByAggregateInputSchema';
import { CartMaxOrderByAggregateInputSchema } from './CartMaxOrderByAggregateInputSchema';
import { CartMinOrderByAggregateInputSchema } from './CartMinOrderByAggregateInputSchema';

export const CartOrderByWithAggregationInputSchema: z.ZodType<Prisma.CartOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CartCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CartMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CartMinOrderByAggregateInputSchema).optional()
}).strict();

export default CartOrderByWithAggregationInputSchema;
