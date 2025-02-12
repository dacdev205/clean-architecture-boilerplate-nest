import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';
import { OrderUpdateManyMutationInputSchema } from './OrderUpdateManyMutationInputSchema';
import { OrderUncheckedUpdateManyWithoutPaymentMethodInputSchema } from './OrderUncheckedUpdateManyWithoutPaymentMethodInputSchema';

export const OrderUpdateManyWithWhereWithoutPaymentMethodInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutPaymentMethodInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutPaymentMethodInputSchema) ]),
}).strict();

export default OrderUpdateManyWithWhereWithoutPaymentMethodInputSchema;
