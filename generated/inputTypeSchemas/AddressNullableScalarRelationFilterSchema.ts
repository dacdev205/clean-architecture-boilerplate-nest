import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';

export const AddressNullableScalarRelationFilterSchema: z.ZodType<Prisma.AddressNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => AddressWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AddressWhereInputSchema).optional().nullable()
}).strict();

export default AddressNullableScalarRelationFilterSchema;
