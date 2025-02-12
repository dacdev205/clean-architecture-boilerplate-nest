import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderCreateWithoutShippingMethodInputSchema } from './OrderCreateWithoutShippingMethodInputSchema';
import { OrderUncheckedCreateWithoutShippingMethodInputSchema } from './OrderUncheckedCreateWithoutShippingMethodInputSchema';

export const OrderCreateOrConnectWithoutShippingMethodInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutShippingMethodInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutShippingMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutShippingMethodInputSchema) ]),
}).strict();

export default OrderCreateOrConnectWithoutShippingMethodInputSchema;
