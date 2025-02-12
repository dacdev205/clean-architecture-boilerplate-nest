import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateUpdateWithoutUserInputSchema } from './AffiliateUpdateWithoutUserInputSchema';
import { AffiliateUncheckedUpdateWithoutUserInputSchema } from './AffiliateUncheckedUpdateWithoutUserInputSchema';

export const AffiliateUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AffiliateUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AffiliateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AffiliateUpdateWithoutUserInputSchema),z.lazy(() => AffiliateUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default AffiliateUpdateWithWhereUniqueWithoutUserInputSchema;
