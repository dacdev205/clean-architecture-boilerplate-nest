import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingMethodWhereInputSchema } from './ShippingMethodWhereInputSchema';
import { ShippingMethodUpdateWithoutOrdersInputSchema } from './ShippingMethodUpdateWithoutOrdersInputSchema';
import { ShippingMethodUncheckedUpdateWithoutOrdersInputSchema } from './ShippingMethodUncheckedUpdateWithoutOrdersInputSchema';

export const ShippingMethodUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.ShippingMethodUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => ShippingMethodWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ShippingMethodUpdateWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default ShippingMethodUpdateToOneWithWhereWithoutOrdersInputSchema;
