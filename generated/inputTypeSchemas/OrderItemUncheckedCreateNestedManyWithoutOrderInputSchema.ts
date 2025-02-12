import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemCreateWithoutOrderInputSchema } from './OrderItemCreateWithoutOrderInputSchema';
import { OrderItemUncheckedCreateWithoutOrderInputSchema } from './OrderItemUncheckedCreateWithoutOrderInputSchema';
import { OrderItemCreateOrConnectWithoutOrderInputSchema } from './OrderItemCreateOrConnectWithoutOrderInputSchema';
import { OrderItemCreateManyOrderInputEnvelopeSchema } from './OrderItemCreateManyOrderInputEnvelopeSchema';
import { OrderItemWhereUniqueInputSchema } from './OrderItemWhereUniqueInputSchema';

export const OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema;
