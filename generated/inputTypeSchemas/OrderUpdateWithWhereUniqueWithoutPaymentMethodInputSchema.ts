import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutPaymentMethodInputSchema } from './OrderUpdateWithoutPaymentMethodInputSchema';
import { OrderUncheckedUpdateWithoutPaymentMethodInputSchema } from './OrderUncheckedUpdateWithoutPaymentMethodInputSchema';

export const OrderUpdateWithWhereUniqueWithoutPaymentMethodInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutPaymentMethodInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutPaymentMethodInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutPaymentMethodInputSchema) ]),
}).strict();

export default OrderUpdateWithWhereUniqueWithoutPaymentMethodInputSchema;
