import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateUpdateWithoutOrderInputSchema } from './AffiliateUpdateWithoutOrderInputSchema';
import { AffiliateUncheckedUpdateWithoutOrderInputSchema } from './AffiliateUncheckedUpdateWithoutOrderInputSchema';
import { AffiliateCreateWithoutOrderInputSchema } from './AffiliateCreateWithoutOrderInputSchema';
import { AffiliateUncheckedCreateWithoutOrderInputSchema } from './AffiliateUncheckedCreateWithoutOrderInputSchema';
import { AffiliateWhereInputSchema } from './AffiliateWhereInputSchema';

export const AffiliateUpsertWithoutOrderInputSchema: z.ZodType<Prisma.AffiliateUpsertWithoutOrderInput> = z.object({
  update: z.union([ z.lazy(() => AffiliateUpdateWithoutOrderInputSchema),z.lazy(() => AffiliateUncheckedUpdateWithoutOrderInputSchema) ]),
  create: z.union([ z.lazy(() => AffiliateCreateWithoutOrderInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutOrderInputSchema) ]),
  where: z.lazy(() => AffiliateWhereInputSchema).optional()
}).strict();

export default AffiliateUpsertWithoutOrderInputSchema;
