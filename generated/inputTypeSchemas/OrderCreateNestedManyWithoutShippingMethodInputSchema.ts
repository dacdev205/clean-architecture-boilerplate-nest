import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutShippingMethodInputSchema } from './OrderCreateWithoutShippingMethodInputSchema';
import { OrderUncheckedCreateWithoutShippingMethodInputSchema } from './OrderUncheckedCreateWithoutShippingMethodInputSchema';
import { OrderCreateOrConnectWithoutShippingMethodInputSchema } from './OrderCreateOrConnectWithoutShippingMethodInputSchema';
import { OrderCreateManyShippingMethodInputEnvelopeSchema } from './OrderCreateManyShippingMethodInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';

export const OrderCreateNestedManyWithoutShippingMethodInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutShippingMethodInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutShippingMethodInputSchema),z.lazy(() => OrderCreateWithoutShippingMethodInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutShippingMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutShippingMethodInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutShippingMethodInputSchema),z.lazy(() => OrderCreateOrConnectWithoutShippingMethodInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyShippingMethodInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OrderCreateNestedManyWithoutShippingMethodInputSchema;
