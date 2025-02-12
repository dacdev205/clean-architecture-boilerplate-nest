import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateWithoutOrderInputSchema } from './AffiliateCreateWithoutOrderInputSchema';
import { AffiliateUncheckedCreateWithoutOrderInputSchema } from './AffiliateUncheckedCreateWithoutOrderInputSchema';
import { AffiliateCreateOrConnectWithoutOrderInputSchema } from './AffiliateCreateOrConnectWithoutOrderInputSchema';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';

export const AffiliateCreateNestedOneWithoutOrderInputSchema: z.ZodType<Prisma.AffiliateCreateNestedOneWithoutOrderInput> = z.object({
  create: z.union([ z.lazy(() => AffiliateCreateWithoutOrderInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutOrderInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AffiliateCreateOrConnectWithoutOrderInputSchema).optional(),
  connect: z.lazy(() => AffiliateWhereUniqueInputSchema).optional()
}).strict();

export default AffiliateCreateNestedOneWithoutOrderInputSchema;
