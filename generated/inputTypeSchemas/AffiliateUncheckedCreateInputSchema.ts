import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutAffiliateInputSchema } from './OrderUncheckedCreateNestedManyWithoutAffiliateInputSchema';

export const AffiliateUncheckedCreateInputSchema: z.ZodType<Prisma.AffiliateUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  addressId: z.string().optional().nullable(),
  Order: z.lazy(() => OrderUncheckedCreateNestedManyWithoutAffiliateInputSchema).optional()
}).strict();

export default AffiliateUncheckedCreateInputSchema;
