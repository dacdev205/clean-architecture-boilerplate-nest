import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OrderCountOrderByAggregateInputSchema } from './OrderCountOrderByAggregateInputSchema';
import { OrderAvgOrderByAggregateInputSchema } from './OrderAvgOrderByAggregateInputSchema';
import { OrderMaxOrderByAggregateInputSchema } from './OrderMaxOrderByAggregateInputSchema';
import { OrderMinOrderByAggregateInputSchema } from './OrderMinOrderByAggregateInputSchema';
import { OrderSumOrderByAggregateInputSchema } from './OrderSumOrderByAggregateInputSchema';

export const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  orderCode: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentStatus: z.lazy(() => SortOrderSchema).optional(),
  totalAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  affiliateId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  shippingMethodId: z.lazy(() => SortOrderSchema).optional(),
  paymentMethodId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderSumOrderByAggregateInputSchema).optional()
}).strict();

export default OrderOrderByWithAggregationInputSchema;
