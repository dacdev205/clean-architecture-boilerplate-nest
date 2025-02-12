import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AffiliateCreateManyInputSchema: z.ZodType<Prisma.AffiliateCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  addressId: z.string().optional().nullable()
}).strict();

export default AffiliateCreateManyInputSchema;
