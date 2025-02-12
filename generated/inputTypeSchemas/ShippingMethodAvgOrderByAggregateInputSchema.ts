import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ShippingMethodAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ShippingMethodAvgOrderByAggregateInput> = z.object({
  fee: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ShippingMethodAvgOrderByAggregateInputSchema;
