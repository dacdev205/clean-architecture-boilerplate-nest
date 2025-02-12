import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingMethodUpdateWithoutOrdersInputSchema } from './ShippingMethodUpdateWithoutOrdersInputSchema';
import { ShippingMethodUncheckedUpdateWithoutOrdersInputSchema } from './ShippingMethodUncheckedUpdateWithoutOrdersInputSchema';
import { ShippingMethodCreateWithoutOrdersInputSchema } from './ShippingMethodCreateWithoutOrdersInputSchema';
import { ShippingMethodUncheckedCreateWithoutOrdersInputSchema } from './ShippingMethodUncheckedCreateWithoutOrdersInputSchema';
import { ShippingMethodWhereInputSchema } from './ShippingMethodWhereInputSchema';

export const ShippingMethodUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.ShippingMethodUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => ShippingMethodUpdateWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => ShippingMethodCreateWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => ShippingMethodWhereInputSchema).optional()
}).strict();

export default ShippingMethodUpsertWithoutOrdersInputSchema;
