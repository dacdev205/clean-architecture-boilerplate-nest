import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateWhereInputSchema } from '../inputTypeSchemas/AffiliateWhereInputSchema'
import { AffiliateOrderByWithRelationInputSchema } from '../inputTypeSchemas/AffiliateOrderByWithRelationInputSchema'
import { AffiliateWhereUniqueInputSchema } from '../inputTypeSchemas/AffiliateWhereUniqueInputSchema'

export const AffiliateAggregateArgsSchema: z.ZodType<Prisma.AffiliateAggregateArgs> = z.object({
  where: AffiliateWhereInputSchema.optional(),
  orderBy: z.union([ AffiliateOrderByWithRelationInputSchema.array(),AffiliateOrderByWithRelationInputSchema ]).optional(),
  cursor: AffiliateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AffiliateAggregateArgsSchema;
