import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingMethodWhereUniqueInputSchema } from './ShippingMethodWhereUniqueInputSchema';
import { ShippingMethodCreateWithoutOrdersInputSchema } from './ShippingMethodCreateWithoutOrdersInputSchema';
import { ShippingMethodUncheckedCreateWithoutOrdersInputSchema } from './ShippingMethodUncheckedCreateWithoutOrdersInputSchema';

export const ShippingMethodCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.ShippingMethodCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => ShippingMethodWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ShippingMethodCreateWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export default ShippingMethodCreateOrConnectWithoutOrdersInputSchema;
