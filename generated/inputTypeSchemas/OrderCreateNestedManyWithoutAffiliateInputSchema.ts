import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutAffiliateInputSchema } from './OrderCreateWithoutAffiliateInputSchema';
import { OrderUncheckedCreateWithoutAffiliateInputSchema } from './OrderUncheckedCreateWithoutAffiliateInputSchema';
import { OrderCreateOrConnectWithoutAffiliateInputSchema } from './OrderCreateOrConnectWithoutAffiliateInputSchema';
import { OrderCreateManyAffiliateInputEnvelopeSchema } from './OrderCreateManyAffiliateInputEnvelopeSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';

export const OrderCreateNestedManyWithoutAffiliateInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutAffiliateInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutAffiliateInputSchema),z.lazy(() => OrderCreateWithoutAffiliateInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutAffiliateInputSchema),z.lazy(() => OrderUncheckedCreateWithoutAffiliateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutAffiliateInputSchema),z.lazy(() => OrderCreateOrConnectWithoutAffiliateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyAffiliateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OrderCreateNestedManyWithoutAffiliateInputSchema;
