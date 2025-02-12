import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AffiliateCountOutputTypeSelectSchema: z.ZodType<Prisma.AffiliateCountOutputTypeSelect> = z.object({
  Order: z.boolean().optional(),
}).strict();

export default AffiliateCountOutputTypeSelectSchema;
