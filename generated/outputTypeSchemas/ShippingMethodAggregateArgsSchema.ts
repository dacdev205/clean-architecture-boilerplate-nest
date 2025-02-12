import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodWhereInputSchema } from '../inputTypeSchemas/ShippingMethodWhereInputSchema'
import { ShippingMethodOrderByWithRelationInputSchema } from '../inputTypeSchemas/ShippingMethodOrderByWithRelationInputSchema'
import { ShippingMethodWhereUniqueInputSchema } from '../inputTypeSchemas/ShippingMethodWhereUniqueInputSchema'

export const ShippingMethodAggregateArgsSchema: z.ZodType<Prisma.ShippingMethodAggregateArgs> = z.object({
  where: ShippingMethodWhereInputSchema.optional(),
  orderBy: z.union([ ShippingMethodOrderByWithRelationInputSchema.array(),ShippingMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: ShippingMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ShippingMethodAggregateArgsSchema;
