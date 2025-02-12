import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingMethodCreateWithoutOrdersInputSchema } from './ShippingMethodCreateWithoutOrdersInputSchema';
import { ShippingMethodUncheckedCreateWithoutOrdersInputSchema } from './ShippingMethodUncheckedCreateWithoutOrdersInputSchema';
import { ShippingMethodCreateOrConnectWithoutOrdersInputSchema } from './ShippingMethodCreateOrConnectWithoutOrdersInputSchema';
import { ShippingMethodWhereUniqueInputSchema } from './ShippingMethodWhereUniqueInputSchema';

export const ShippingMethodCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.ShippingMethodCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => ShippingMethodCreateWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ShippingMethodCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => ShippingMethodWhereUniqueInputSchema).optional()
}).strict();

export default ShippingMethodCreateNestedOneWithoutOrdersInputSchema;
