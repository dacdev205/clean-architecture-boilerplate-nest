import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderCreateWithoutAffiliateInputSchema } from './OrderCreateWithoutAffiliateInputSchema';
import { OrderUncheckedCreateWithoutAffiliateInputSchema } from './OrderUncheckedCreateWithoutAffiliateInputSchema';

export const OrderCreateOrConnectWithoutAffiliateInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutAffiliateInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutAffiliateInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAffiliateInputSchema) ]),
}).strict();

export default OrderCreateOrConnectWithoutAffiliateInputSchema;
