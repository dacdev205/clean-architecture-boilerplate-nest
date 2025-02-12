import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';
import { OrderUpdateManyMutationInputSchema } from './OrderUpdateManyMutationInputSchema';
import { OrderUncheckedUpdateManyWithoutAffiliateInputSchema } from './OrderUncheckedUpdateManyWithoutAffiliateInputSchema';

export const OrderUpdateManyWithWhereWithoutAffiliateInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutAffiliateInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutAffiliateInputSchema) ]),
}).strict();

export default OrderUpdateManyWithWhereWithoutAffiliateInputSchema;
