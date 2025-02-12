import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';

export const AddressScalarRelationFilterSchema: z.ZodType<Prisma.AddressScalarRelationFilter> = z.object({
  is: z.lazy(() => AddressWhereInputSchema).optional(),
  isNot: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export default AddressScalarRelationFilterSchema;
