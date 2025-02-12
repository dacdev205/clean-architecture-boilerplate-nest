import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutAffiliateInputSchema } from './OrderUpdateWithoutAffiliateInputSchema';
import { OrderUncheckedUpdateWithoutAffiliateInputSchema } from './OrderUncheckedUpdateWithoutAffiliateInputSchema';

export const OrderUpdateWithWhereUniqueWithoutAffiliateInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutAffiliateInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutAffiliateInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutAffiliateInputSchema) ]),
}).strict();

export default OrderUpdateWithWhereUniqueWithoutAffiliateInputSchema;
