import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateWhereInputSchema } from './AffiliateWhereInputSchema';

export const AffiliateNullableScalarRelationFilterSchema: z.ZodType<Prisma.AffiliateNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => AffiliateWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AffiliateWhereInputSchema).optional().nullable()
}).strict();

export default AffiliateNullableScalarRelationFilterSchema;
