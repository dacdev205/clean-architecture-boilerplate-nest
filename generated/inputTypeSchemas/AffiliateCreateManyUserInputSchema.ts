import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AffiliateCreateManyUserInputSchema: z.ZodType<Prisma.AffiliateCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  addressId: z.string().optional().nullable()
}).strict();

export default AffiliateCreateManyUserInputSchema;
