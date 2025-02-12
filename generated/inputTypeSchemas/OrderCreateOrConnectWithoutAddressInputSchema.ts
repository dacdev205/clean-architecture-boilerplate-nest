import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderCreateWithoutAddressInputSchema } from './OrderCreateWithoutAddressInputSchema';
import { OrderUncheckedCreateWithoutAddressInputSchema } from './OrderUncheckedCreateWithoutAddressInputSchema';

export const OrderCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutAddressInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutAddressInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default OrderCreateOrConnectWithoutAddressInputSchema;
