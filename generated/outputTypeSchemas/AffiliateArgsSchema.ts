import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateSelectSchema } from '../inputTypeSchemas/AffiliateSelectSchema';
import { AffiliateIncludeSchema } from '../inputTypeSchemas/AffiliateIncludeSchema';

export const AffiliateArgsSchema: z.ZodType<Prisma.AffiliateDefaultArgs> = z.object({
  select: z.lazy(() => AffiliateSelectSchema).optional(),
  include: z.lazy(() => AffiliateIncludeSchema).optional(),
}).strict();

export default AffiliateArgsSchema;
