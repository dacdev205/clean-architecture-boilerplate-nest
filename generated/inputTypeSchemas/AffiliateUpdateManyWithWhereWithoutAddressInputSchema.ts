import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateScalarWhereInputSchema } from './AffiliateScalarWhereInputSchema';
import { AffiliateUpdateManyMutationInputSchema } from './AffiliateUpdateManyMutationInputSchema';
import { AffiliateUncheckedUpdateManyWithoutAddressInputSchema } from './AffiliateUncheckedUpdateManyWithoutAddressInputSchema';

export const AffiliateUpdateManyWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateUpdateManyWithWhereWithoutAddressInput> = z.object({
  where: z.lazy(() => AffiliateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AffiliateUpdateManyMutationInputSchema),z.lazy(() => AffiliateUncheckedUpdateManyWithoutAddressInputSchema) ]),
}).strict();

export default AffiliateUpdateManyWithWhereWithoutAddressInputSchema;
