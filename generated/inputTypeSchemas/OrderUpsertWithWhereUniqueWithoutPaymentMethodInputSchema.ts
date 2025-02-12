import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutPaymentMethodInputSchema } from './OrderUpdateWithoutPaymentMethodInputSchema';
import { OrderUncheckedUpdateWithoutPaymentMethodInputSchema } from './OrderUncheckedUpdateWithoutPaymentMethodInputSchema';
import { OrderCreateWithoutPaymentMethodInputSchema } from './OrderCreateWithoutPaymentMethodInputSchema';
import { OrderUncheckedCreateWithoutPaymentMethodInputSchema } from './OrderUncheckedCreateWithoutPaymentMethodInputSchema';

export const OrderUpsertWithWhereUniqueWithoutPaymentMethodInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutPaymentMethodInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutPaymentMethodInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutPaymentMethodInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutPaymentMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutPaymentMethodInputSchema) ]),
}).strict();

export default OrderUpsertWithWhereUniqueWithoutPaymentMethodInputSchema;
