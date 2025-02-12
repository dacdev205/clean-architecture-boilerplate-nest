import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutAffiliateInputSchema } from './OrderUpdateWithoutAffiliateInputSchema';
import { OrderUncheckedUpdateWithoutAffiliateInputSchema } from './OrderUncheckedUpdateWithoutAffiliateInputSchema';
import { OrderCreateWithoutAffiliateInputSchema } from './OrderCreateWithoutAffiliateInputSchema';
import { OrderUncheckedCreateWithoutAffiliateInputSchema } from './OrderUncheckedCreateWithoutAffiliateInputSchema';

export const OrderUpsertWithWhereUniqueWithoutAffiliateInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutAffiliateInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutAffiliateInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutAffiliateInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutAffiliateInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAffiliateInputSchema) ]),
}).strict();

export default OrderUpsertWithWhereUniqueWithoutAffiliateInputSchema;
