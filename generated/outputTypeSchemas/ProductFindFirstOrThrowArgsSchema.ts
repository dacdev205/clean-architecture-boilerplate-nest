import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductIncludeSchema } from '../inputTypeSchemas/ProductIncludeSchema'
import { ProductWhereInputSchema } from '../inputTypeSchemas/ProductWhereInputSchema'
import { ProductOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProductOrderByWithRelationInputSchema'
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema'
import { ProductScalarFieldEnumSchema } from '../inputTypeSchemas/ProductScalarFieldEnumSchema'
import { OrderItemFindManyArgsSchema } from "../outputTypeSchemas/OrderItemFindManyArgsSchema"
import { CategoryArgsSchema } from "../outputTypeSchemas/CategoryArgsSchema"
import { CartItemFindManyArgsSchema } from "../outputTypeSchemas/CartItemFindManyArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  price: z.boolean().optional(),
  quantity: z.boolean().optional(),
  discount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  CartItem: z.union([z.boolean(),z.lazy(() => CartItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ProductFindFirstOrThrowArgsSchema;
