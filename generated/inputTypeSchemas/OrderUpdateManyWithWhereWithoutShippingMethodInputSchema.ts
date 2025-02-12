import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';
import { OrderUpdateManyMutationInputSchema } from './OrderUpdateManyMutationInputSchema';
import { OrderUncheckedUpdateManyWithoutShippingMethodInputSchema } from './OrderUncheckedUpdateManyWithoutShippingMethodInputSchema';

export const OrderUpdateManyWithWhereWithoutShippingMethodInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutShippingMethodInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutShippingMethodInputSchema) ]),
}).strict();

export default OrderUpdateManyWithWhereWithoutShippingMethodInputSchema;
