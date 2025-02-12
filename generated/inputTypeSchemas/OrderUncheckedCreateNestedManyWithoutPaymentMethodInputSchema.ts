import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutPaymentMethodInputSchema } from './OrderCreateWithoutPaymentMethodInputSchema';
import { OrderUncheckedCreateWithoutPaymentMethodInputSchema } from './OrderUncheckedCreateWithoutPaymentMethodInputSchema';
import { OrderCreateOrConnectWithoutPaymentMethodInputSchema } from './OrderCreateOrConnectWithoutPaymentMethodInputSchema';
import { OrderCreateManyPaymentMethodInputEnvelopeSchema } from './OrderCreateManyPaymentMethodInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';

export const OrderUncheckedCreateNestedManyWithoutPaymentMethodInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutPaymentMethodInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutPaymentMethodInputSchema),z.lazy(() => OrderCreateWithoutPaymentMethodInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutPaymentMethodInputSchema),z.lazy(() => OrderUncheckedCreateWithoutPaymentMethodInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutPaymentMethodInputSchema),z.lazy(() => OrderCreateOrConnectWithoutPaymentMethodInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyPaymentMethodInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OrderUncheckedCreateNestedManyWithoutPaymentMethodInputSchema;
