import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutAffiliateInputSchema } from './OrderCreateWithoutAffiliateInputSchema';
import { OrderUncheckedCreateWithoutAffiliateInputSchema } from './OrderUncheckedCreateWithoutAffiliateInputSchema';
import { OrderCreateOrConnectWithoutAffiliateInputSchema } from './OrderCreateOrConnectWithoutAffiliateInputSchema';
import { OrderUpsertWithWhereUniqueWithoutAffiliateInputSchema } from './OrderUpsertWithWhereUniqueWithoutAffiliateInputSchema';
import { OrderCreateManyAffiliateInputEnvelopeSchema } from './OrderCreateManyAffiliateInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateWithWhereUniqueWithoutAffiliateInputSchema } from './OrderUpdateWithWhereUniqueWithoutAffiliateInputSchema';
import { OrderUpdateManyWithWhereWithoutAffiliateInputSchema } from './OrderUpdateManyWithWhereWithoutAffiliateInputSchema';
import { OrderScalarWhereInputSchema } from './OrderScalarWhereInputSchema';

export const OrderUpdateManyWithoutAffiliateNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutAffiliateNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutAffiliateInputSchema),z.lazy(() => OrderCreateWithoutAffiliateInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutAffiliateInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAffiliateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutAffiliateInputSchema),z.lazy(() => OrderCreateOrConnectWithoutAffiliateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutAffiliateInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutAffiliateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyAffiliateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutAffiliateInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutAffiliateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutAffiliateInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutAffiliateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OrderUpdateManyWithoutAffiliateNestedInputSchema;
