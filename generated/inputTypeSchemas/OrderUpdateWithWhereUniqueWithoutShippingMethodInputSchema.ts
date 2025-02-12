import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutShippingMethodInputSchema } from './OrderUpdateWithoutShippingMethodInputSchema';
import { OrderUncheckedUpdateWithoutShippingMethodInputSchema } from './OrderUncheckedUpdateWithoutShippingMethodInputSchema';

export const OrderUpdateWithWhereUniqueWithoutShippingMethodInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutShippingMethodInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutShippingMethodInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutShippingMethodInputSchema) ]),
}).strict();

export default OrderUpdateWithWhereUniqueWithoutShippingMethodInputSchema;
