import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';
import { OrderUpdateManyMutationInputSchema } from './OrderUpdateManyMutationInputSchema';
import { OrderUncheckedUpdateManyWithoutAddressInputSchema } from './OrderUncheckedUpdateManyWithoutAddressInputSchema';

export const OrderUpdateManyWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutAddressInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutAddressInputSchema) ]),
}).strict();

export default OrderUpdateManyWithWhereWithoutAddressInputSchema;
