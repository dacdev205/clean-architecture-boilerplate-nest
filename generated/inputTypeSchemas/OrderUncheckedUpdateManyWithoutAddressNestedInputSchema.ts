import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutAddressInputSchema } from './OrderCreateWithoutAddressInputSchema';
import { OrderUncheckedCreateWithoutAddressInputSchema } from './OrderUncheckedCreateWithoutAddressInputSchema';
import { OrderCreateOrConnectWithoutAddressInputSchema } from './OrderCreateOrConnectWithoutAddressInputSchema';
import { OrderUpsertWithWhereUniqueWithoutAddressInputSchema } from './OrderUpsertWithWhereUniqueWithoutAddressInputSchema';
import { OrderCreateManyAddressInputEnvelopeSchema } from './OrderCreateManyAddressInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithWhereUniqueWithoutAddressInputSchema } from './OrderUpdateWithWhereUniqueWithoutAddressInputSchema';
import { OrderUpdateManyWithWhereWithoutAddressInputSchema } from './OrderUpdateManyWithWhereWithoutAddressInputSchema';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';

export const OrderUncheckedUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutAddressNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutAddressInputSchema),z.lazy(() => OrderCreateWithoutAddressInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutAddressInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAddressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutAddressInputSchema),z.lazy(() => OrderCreateOrConnectWithoutAddressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutAddressInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutAddressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyAddressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutAddressInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutAddressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutAddressInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutAddressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OrderUncheckedUpdateManyWithoutAddressNestedInputSchema;
