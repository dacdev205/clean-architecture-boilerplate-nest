import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { AddressNullableScalarRelationFilterSchema } from './AddressNullableScalarRelationFilterSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';
import { OrderListRelationFilterSchema } from './OrderListRelationFilterSchema';

export const AffiliateWhereInputSchema: z.ZodType<Prisma.AffiliateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AffiliateWhereInputSchema),z.lazy(() => AffiliateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AffiliateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AffiliateWhereInputSchema),z.lazy(() => AffiliateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => AddressNullableScalarRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional().nullable(),
  Order: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export default AffiliateWhereInputSchema;
