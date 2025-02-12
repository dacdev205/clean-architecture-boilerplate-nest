import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithoutAddressInputSchema } from './OrderUpdateWithoutAddressInputSchema';
import { OrderUncheckedUpdateWithoutAddressInputSchema } from './OrderUncheckedUpdateWithoutAddressInputSchema';

export const OrderUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutAddressInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutAddressInputSchema) ]),
}).strict();

export default OrderUpdateWithWhereUniqueWithoutAddressInputSchema;
