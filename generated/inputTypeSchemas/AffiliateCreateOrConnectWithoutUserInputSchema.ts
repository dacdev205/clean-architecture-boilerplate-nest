import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateCreateWithoutUserInputSchema } from './AffiliateCreateWithoutUserInputSchema';
import { AffiliateUncheckedCreateWithoutUserInputSchema } from './AffiliateUncheckedCreateWithoutUserInputSchema';

export const AffiliateCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AffiliateCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AffiliateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AffiliateCreateWithoutUserInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default AffiliateCreateOrConnectWithoutUserInputSchema;
