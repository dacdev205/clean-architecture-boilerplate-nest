import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutPaymentMethodInputSchema } from './OrderCreateWithoutPaymentMethodInputSchema';
import { OrderUncheckedCreateWithoutPaymentMethodInputSchema } from './OrderUncheckedCreateWithoutPaymentMethodInputSchema';
import { OrderCreateOrConnectWithoutPaymentMethodInputSchema } from './OrderCreateOrConnectWithoutPaymentMethodInputSchema';
import { OrderUpsertWithWhereUniqueWithoutPaymentMethodInputSchema } from './OrderUpsertWithWhereUniqueWithoutPaymentMethodInputSchema';
import { OrderCreateManyPaymentMethodInputEnvelopeSchema } from './OrderCreateManyPaymentMethodInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithWhereUniqueWithoutPaymentMethodInputSchema } from './OrderUpdateWithWhereUniqueWithoutPaymentMethodInputSchema';
import { OrderUpdateManyWithWhereWithoutPaymentMethodInputSchema } from './OrderUpdateManyWithWhereWithoutPaymentMethodInputSchema';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';

export const OrderUpdateManyWithoutPaymentMethodNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutPaymentMethodNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutPaymentMethodInputSchema),z.lazy(() => OrderCreateWithoutPaymentMethodInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutPaymentMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutPaymentMethodInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutPaymentMethodInputSchema),z.lazy(() => OrderCreateOrConnectWithoutPaymentMethodInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutPaymentMethodInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutPaymentMethodInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyPaymentMethodInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutPaymentMethodInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutPaymentMethodInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutPaymentMethodInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutPaymentMethodInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OrderUpdateManyWithoutPaymentMethodNestedInputSchema;
