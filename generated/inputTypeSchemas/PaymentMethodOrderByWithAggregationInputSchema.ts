import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PaymentMethodCountOrderByAggregateInputSchema } from './PaymentMethodCountOrderByAggregateInputSchema';
import { PaymentMethodMaxOrderByAggregateInputSchema } from './PaymentMethodMaxOrderByAggregateInputSchema';
import { PaymentMethodMinOrderByAggregateInputSchema } from './PaymentMethodMinOrderByAggregateInputSchema';

export const PaymentMethodOrderByWithAggregationInputSchema: z.ZodType<Prisma.PaymentMethodOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PaymentMethodCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PaymentMethodMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PaymentMethodMinOrderByAggregateInputSchema).optional()
}).strict();

export default PaymentMethodOrderByWithAggregationInputSchema;
