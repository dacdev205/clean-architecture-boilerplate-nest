import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateCreateWithoutAddressInputSchema } from './AffiliateCreateWithoutAddressInputSchema';
import { AffiliateUncheckedCreateWithoutAddressInputSchema } from './AffiliateUncheckedCreateWithoutAddressInputSchema';

export const AffiliateCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateCreateOrConnectWithoutAddressInput> = z.object({
  where: z.lazy(() => AffiliateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AffiliateCreateWithoutAddressInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export default AffiliateCreateOrConnectWithoutAddressInputSchema;
