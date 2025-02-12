import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AffiliateCreateManyAddressInputSchema: z.ZodType<Prisma.AffiliateCreateManyAddressInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export default AffiliateCreateManyAddressInputSchema;
