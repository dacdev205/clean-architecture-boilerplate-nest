import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateUpdateWithoutAddressInputSchema } from './AffiliateUpdateWithoutAddressInputSchema';
import { AffiliateUncheckedUpdateWithoutAddressInputSchema } from './AffiliateUncheckedUpdateWithoutAddressInputSchema';

export const AffiliateUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateUpdateWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => AffiliateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AffiliateUpdateWithoutAddressInputSchema),z.lazy(() => AffiliateUncheckedUpdateWithoutAddressInputSchema) ]),
}).strict();

export default AffiliateUpdateWithWhereUniqueWithoutAddressInputSchema;
