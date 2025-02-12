import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateUpdateWithoutUserInputSchema } from './AffiliateUpdateWithoutUserInputSchema';
import { AffiliateUncheckedUpdateWithoutUserInputSchema } from './AffiliateUncheckedUpdateWithoutUserInputSchema';
import { AffiliateCreateWithoutUserInputSchema } from './AffiliateCreateWithoutUserInputSchema';
import { AffiliateUncheckedCreateWithoutUserInputSchema } from './AffiliateUncheckedCreateWithoutUserInputSchema';

export const AffiliateUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AffiliateUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AffiliateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AffiliateUpdateWithoutUserInputSchema),z.lazy(() => AffiliateUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AffiliateCreateWithoutUserInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default AffiliateUpsertWithWhereUniqueWithoutUserInputSchema;
