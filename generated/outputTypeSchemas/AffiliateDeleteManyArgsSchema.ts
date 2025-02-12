import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateWhereInputSchema } from '../inputTypeSchemas/AffiliateWhereInputSchema'

export const AffiliateDeleteManyArgsSchema: z.ZodType<Prisma.AffiliateDeleteManyArgs> = z.object({
  where: AffiliateWhereInputSchema.optional(),
}).strict() ;

export default AffiliateDeleteManyArgsSchema;
