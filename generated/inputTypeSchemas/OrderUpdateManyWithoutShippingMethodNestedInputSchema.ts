import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutShippingMethodInputSchema } from './OrderCreateWithoutShippingMethodInputSchema';
import { OrderUncheckedCreateWithoutShippingMethodInputSchema } from './OrderUncheckedCreateWithoutShippingMethodInputSchema';
import { OrderCreateOrConnectWithoutShippingMethodInputSchema } from './OrderCreateOrConnectWithoutShippingMethodInputSchema';
import { OrderUpsertWithWhereUniqueWithoutShippingMethodInputSchema } from './OrderUpsertWithWhereUniqueWithoutShippingMethodInputSchema';
import { OrderCreateManyShippingMethodInputEnvelopeSchema } from './OrderCreateManyShippingMethodInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithWhereUniqueWithoutShippingMethodInputSchema } from './OrderUpdateWithWhereUniqueWithoutShippingMethodInputSchema';
import { OrderUpdateManyWithWhereWithoutShippingMethodInputSchema } from './OrderUpdateManyWithWhereWithoutShippingMethodInputSchema';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';

export const OrderUpdateManyWithoutShippingMethodNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutShippingMethodNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutShippingMethodInputSchema),z.lazy(() => OrderCreateWithoutShippingMethodInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutShippingMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutShippingMethodInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutShippingMethodInputSchema),z.lazy(() => OrderCreateOrConnectWithoutShippingMethodInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutShippingMethodInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutShippingMethodInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyShippingMethodInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutShippingMethodInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutShippingMethodInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutShippingMethodInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutShippingMethodInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OrderUpdateManyWithoutShippingMethodNestedInputSchema;
