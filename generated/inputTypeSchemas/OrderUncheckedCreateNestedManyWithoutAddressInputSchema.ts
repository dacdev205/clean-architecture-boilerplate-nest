import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutAddressInputSchema } from './OrderCreateWithoutAddressInputSchema';
import { OrderUncheckedCreateWithoutAddressInputSchema } from './OrderUncheckedCreateWithoutAddressInputSchema';
import { OrderCreateOrConnectWithoutAddressInputSchema } from './OrderCreateOrConnectWithoutAddressInputSchema';
import { OrderCreateManyAddressInputEnvelopeSchema } from './OrderCreateManyAddressInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';

export const OrderUncheckedCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutAddressInputSchema),z.lazy(() => OrderCreateWithoutAddressInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutAddressInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAddressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutAddressInputSchema),z.lazy(() => OrderCreateOrConnectWithoutAddressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyAddressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OrderUncheckedCreateNestedManyWithoutAddressInputSchema;
