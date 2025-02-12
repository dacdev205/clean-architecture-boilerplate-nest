import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateCreateManyInputSchema } from '../inputTypeSchemas/AffiliateCreateManyInputSchema'

export const AffiliateCreateManyArgsSchema: z.ZodType<Prisma.AffiliateCreateManyArgs> = z.object({
  data: z.union([ AffiliateCreateManyInputSchema,AffiliateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AffiliateCreateManyArgsSchema;
