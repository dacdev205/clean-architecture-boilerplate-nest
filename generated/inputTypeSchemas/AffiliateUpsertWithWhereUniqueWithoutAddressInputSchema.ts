import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateUpdateWithoutAddressInputSchema } from './AffiliateUpdateWithoutAddressInputSchema';
import { AffiliateUncheckedUpdateWithoutAddressInputSchema } from './AffiliateUncheckedUpdateWithoutAddressInputSchema';
import { AffiliateCreateWithoutAddressInputSchema } from './AffiliateCreateWithoutAddressInputSchema';
import { AffiliateUncheckedCreateWithoutAddressInputSchema } from './AffiliateUncheckedCreateWithoutAddressInputSchema';

export const AffiliateUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateUpsertWithWhereUniqueWithoutAddressInput> = z.object({
  where: z.lazy(() => AffiliateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AffiliateUpdateWithoutAddressInputSchema),z.lazy(() => AffiliateUncheckedUpdateWithoutAddressInputSchema) ]),
  create: z.union([ z.lazy(() => AffiliateCreateWithoutAddressInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default AffiliateUpsertWithWhereUniqueWithoutAddressInputSchema;
