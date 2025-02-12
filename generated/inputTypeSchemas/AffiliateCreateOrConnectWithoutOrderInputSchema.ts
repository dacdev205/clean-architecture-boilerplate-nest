import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateCreateWithoutOrderInputSchema } from './AffiliateCreateWithoutOrderInputSchema';
import { AffiliateUncheckedCreateWithoutOrderInputSchema } from './AffiliateUncheckedCreateWithoutOrderInputSchema';

export const AffiliateCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.AffiliateCreateOrConnectWithoutOrderInput> = z.object({
  where: z.lazy(() => AffiliateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AffiliateCreateWithoutOrderInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export default AffiliateCreateOrConnectWithoutOrderInputSchema;
