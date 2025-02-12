import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodIncludeSchema } from '../inputTypeSchemas/ShippingMethodIncludeSchema'
import { ShippingMethodWhereInputSchema } from '../inputTypeSchemas/ShippingMethodWhereInputSchema'
import { ShippingMethodOrderByWithRelationInputSchema } from '../inputTypeSchemas/ShippingMethodOrderByWithRelationInputSchema'
import { ShippingMethodWhereUniqueInputSchema } from '../inputTypeSchemas/ShippingMethodWhereUniqueInputSchema'
import { ShippingMethodScalarFieldEnumSchema } from '../inputTypeSchemas/ShippingMethodScalarFieldEnumSchema'
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { ShippingMethodCountOutputTypeArgsSchema } from "../outputTypeSchemas/ShippingMethodCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ShippingMethodSelectSchema: z.ZodType<Prisma.ShippingMethodSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  fee: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ShippingMethodCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ShippingMethodFindFirstArgsSchema: z.ZodType<Prisma.ShippingMethodFindFirstArgs> = z.object({
  select: ShippingMethodSelectSchema.optional(),
  include: z.lazy(() => ShippingMethodIncludeSchema).optional(),
  where: ShippingMethodWhereInputSchema.optional(),
  orderBy: z.union([ ShippingMethodOrderByWithRelationInputSchema.array(),ShippingMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: ShippingMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ShippingMethodScalarFieldEnumSchema,ShippingMethodScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ShippingMethodFindFirstArgsSchema;
