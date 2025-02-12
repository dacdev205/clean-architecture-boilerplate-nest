import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateScalarWhereInputSchema } from './AffiliateScalarWhereInputSchema';
import { AffiliateUpdateManyMutationInputSchema } from './AffiliateUpdateManyMutationInputSchema';
import { AffiliateUncheckedUpdateManyWithoutUserInputSchema } from './AffiliateUncheckedUpdateManyWithoutUserInputSchema';

export const AffiliateUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AffiliateUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AffiliateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AffiliateUpdateManyMutationInputSchema),z.lazy(() => AffiliateUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default AffiliateUpdateManyWithWhereWithoutUserInputSchema;
