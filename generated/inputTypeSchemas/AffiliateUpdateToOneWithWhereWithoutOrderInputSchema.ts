import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereInputSchema } from './AffiliateWhereInputSchema';
import { AffiliateUpdateWithoutOrderInputSchema } from './AffiliateUpdateWithoutOrderInputSchema';
import { AffiliateUncheckedUpdateWithoutOrderInputSchema } from './AffiliateUncheckedUpdateWithoutOrderInputSchema';

export const AffiliateUpdateToOneWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.AffiliateUpdateToOneWithWhereWithoutOrderInput> = z.object({
  where: z.lazy(() => AffiliateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AffiliateUpdateWithoutOrderInputSchema),z.lazy(() => AffiliateUncheckedUpdateWithoutOrderInputSchema) ]),
}).strict();

export default AffiliateUpdateToOneWithWhereWithoutOrderInputSchema;
