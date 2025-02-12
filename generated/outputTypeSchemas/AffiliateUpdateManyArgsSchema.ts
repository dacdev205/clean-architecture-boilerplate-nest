import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateUpdateManyMutationInputSchema } from '../inputTypeSchemas/AffiliateUpdateManyMutationInputSchema'
import { AffiliateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AffiliateUncheckedUpdateManyInputSchema'
import { AffiliateWhereInputSchema } from '../inputTypeSchemas/AffiliateWhereInputSchema'

export const AffiliateUpdateManyArgsSchema: z.ZodType<Prisma.AffiliateUpdateManyArgs> = z.object({
  data: z.union([ AffiliateUpdateManyMutationInputSchema,AffiliateUncheckedUpdateManyInputSchema ]),
  where: AffiliateWhereInputSchema.optional(),
}).strict() ;

export default AffiliateUpdateManyArgsSchema;
