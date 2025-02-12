import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CartItemCountOrderByAggregateInputSchema } from './CartItemCountOrderByAggregateInputSchema';
import { CartItemAvgOrderByAggregateInputSchema } from './CartItemAvgOrderByAggregateInputSchema';
import { CartItemMaxOrderByAggregateInputSchema } from './CartItemMaxOrderByAggregateInputSchema';
import { CartItemMinOrderByAggregateInputSchema } from './CartItemMinOrderByAggregateInputSchema';
import { CartItemSumOrderByAggregateInputSchema } from './CartItemSumOrderByAggregateInputSchema';

export const CartItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.CartItemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  cartId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CartItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CartItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CartItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CartItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CartItemSumOrderByAggregateInputSchema).optional()
}).strict();

export default CartItemOrderByWithAggregationInputSchema;
