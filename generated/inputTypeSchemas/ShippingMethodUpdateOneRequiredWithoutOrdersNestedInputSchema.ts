import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingMethodCreateWithoutOrdersInputSchema } from './ShippingMethodCreateWithoutOrdersInputSchema';
import { ShippingMethodUncheckedCreateWithoutOrdersInputSchema } from './ShippingMethodUncheckedCreateWithoutOrdersInputSchema';
import { ShippingMethodCreateOrConnectWithoutOrdersInputSchema } from './ShippingMethodCreateOrConnectWithoutOrdersInputSchema';
import { ShippingMethodUpsertWithoutOrdersInputSchema } from './ShippingMethodUpsertWithoutOrdersInputSchema';
import { ShippingMethodWhereUniqueInputSchema } from './ShippingMethodWhereUniqueInputSchema';
import { ShippingMethodUpdateToOneWithWhereWithoutOrdersInputSchema } from './ShippingMethodUpdateToOneWithWhereWithoutOrdersInputSchema';
import { ShippingMethodUpdateWithoutOrdersInputSchema } from './ShippingMethodUpdateWithoutOrdersInputSchema';
import { ShippingMethodUncheckedUpdateWithoutOrdersInputSchema } from './ShippingMethodUncheckedUpdateWithoutOrdersInputSchema';

export const ShippingMethodUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.ShippingMethodUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ShippingMethodCreateWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ShippingMethodCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => ShippingMethodUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => ShippingMethodWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ShippingMethodUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUpdateWithoutOrdersInputSchema),z.lazy(() => ShippingMethodUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export default ShippingMethodUpdateOneRequiredWithoutOrdersNestedInputSchema;
