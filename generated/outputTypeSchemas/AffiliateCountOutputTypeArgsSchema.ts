import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateCountOutputTypeSelectSchema } from './AffiliateCountOutputTypeSelectSchema';

export const AffiliateCountOutputTypeArgsSchema: z.ZodType<Prisma.AffiliateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AffiliateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default AffiliateCountOutputTypeSelectSchema;
