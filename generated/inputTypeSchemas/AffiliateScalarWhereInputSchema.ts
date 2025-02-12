import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const AffiliateScalarWhereInputSchema: z.ZodType<Prisma.AffiliateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AffiliateScalarWhereInputSchema),z.lazy(() => AffiliateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AffiliateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AffiliateScalarWhereInputSchema),z.lazy(() => AffiliateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default AffiliateScalarWhereInputSchema;
