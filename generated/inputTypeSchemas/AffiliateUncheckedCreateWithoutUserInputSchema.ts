import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutAffiliateInputSchema } from './OrderUncheckedCreateNestedManyWithoutAffiliateInputSchema';

export const AffiliateUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AffiliateUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  addressId: z.string().optional().nullable(),
  Order: z.lazy(() => OrderUncheckedCreateNestedManyWithoutAffiliateInputSchema).optional()
}).strict();

export default AffiliateUncheckedCreateWithoutUserInputSchema;
