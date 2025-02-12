import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateWhereInputSchema } from '../inputTypeSchemas/AffiliateWhereInputSchema'
import { AffiliateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AffiliateOrderByWithAggregationInputSchema'
import { AffiliateScalarFieldEnumSchema } from '../inputTypeSchemas/AffiliateScalarFieldEnumSchema'
import { AffiliateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AffiliateScalarWhereWithAggregatesInputSchema'

export const AffiliateGroupByArgsSchema: z.ZodType<Prisma.AffiliateGroupByArgs> = z.object({
  where: AffiliateWhereInputSchema.optional(),
  orderBy: z.union([ AffiliateOrderByWithAggregationInputSchema.array(),AffiliateOrderByWithAggregationInputSchema ]).optional(),
  by: AffiliateScalarFieldEnumSchema.array(),
  having: AffiliateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AffiliateGroupByArgsSchema;
