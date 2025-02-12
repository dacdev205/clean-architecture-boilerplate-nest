import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutAddressInputSchema } from './OrderUpdateWithoutAddressInputSchema';
import { OrderUncheckedUpdateWithoutAddressInputSchema } from './OrderUncheckedUpdateWithoutAddressInputSchema';
import { OrderCreateWithoutAddressInputSchema } from './OrderCreateWithoutAddressInputSchema';
import { OrderUncheckedCreateWithoutAddressInputSchema } from './OrderUncheckedCreateWithoutAddressInputSchema';

export const OrderUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutAddressInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutAddressInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutAddressInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default OrderUpsertWithWhereUniqueWithoutAddressInputSchema;
