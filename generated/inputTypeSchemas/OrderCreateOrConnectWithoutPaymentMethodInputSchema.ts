import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderCreateWithoutPaymentMethodInputSchema } from './OrderCreateWithoutPaymentMethodInputSchema';
import { OrderUncheckedCreateWithoutPaymentMethodInputSchema } from './OrderUncheckedCreateWithoutPaymentMethodInputSchema';

export const OrderCreateOrConnectWithoutPaymentMethodInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutPaymentMethodInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutPaymentMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutPaymentMethodInputSchema) ]),
}).strict();

export default OrderCreateOrConnectWithoutPaymentMethodInputSchema;
