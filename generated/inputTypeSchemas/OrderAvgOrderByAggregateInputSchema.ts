import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderAvgOrderByAggregateInput> = z.object({
  totalAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OrderAvgOrderByAggregateInputSchema;
