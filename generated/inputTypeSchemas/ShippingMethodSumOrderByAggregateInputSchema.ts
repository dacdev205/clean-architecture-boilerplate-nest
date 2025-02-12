import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ShippingMethodSumOrderByAggregateInputSchema: z.ZodType<Prisma.ShippingMethodSumOrderByAggregateInput> = z.object({
  fee: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ShippingMethodSumOrderByAggregateInputSchema;
