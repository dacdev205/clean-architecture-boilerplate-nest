import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutShippingMethodInputSchema } from './OrderUpdateWithoutShippingMethodInputSchema';
import { OrderUncheckedUpdateWithoutShippingMethodInputSchema } from './OrderUncheckedUpdateWithoutShippingMethodInputSchema';
import { OrderCreateWithoutShippingMethodInputSchema } from './OrderCreateWithoutShippingMethodInputSchema';
import { OrderUncheckedCreateWithoutShippingMethodInputSchema } from './OrderUncheckedCreateWithoutShippingMethodInputSchema';

export const OrderUpsertWithWhereUniqueWithoutShippingMethodInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutShippingMethodInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutShippingMethodInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutShippingMethodInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutShippingMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutShippingMethodInputSchema) ]),
}).strict();

export default OrderUpsertWithWhereUniqueWithoutShippingMethodInputSchema;
