import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodWhereInputSchema } from '../inputTypeSchemas/ShippingMethodWhereInputSchema'
import { ShippingMethodOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ShippingMethodOrderByWithAggregationInputSchema'
import { ShippingMethodScalarFieldEnumSchema } from '../inputTypeSchemas/ShippingMethodScalarFieldEnumSchema'
import { ShippingMethodScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ShippingMethodScalarWhereWithAggregatesInputSchema'

export const ShippingMethodGroupByArgsSchema: z.ZodType<Prisma.ShippingMethodGroupByArgs> = z.object({
  where: ShippingMethodWhereInputSchema.optional(),
  orderBy: z.union([ ShippingMethodOrderByWithAggregationInputSchema.array(),ShippingMethodOrderByWithAggregationInputSchema ]).optional(),
  by: ShippingMethodScalarFieldEnumSchema.array(),
  having: ShippingMethodScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ShippingMethodGroupByArgsSchema;
