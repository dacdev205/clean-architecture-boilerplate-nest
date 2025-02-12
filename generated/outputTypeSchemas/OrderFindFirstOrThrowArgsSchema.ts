import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderIncludeSchema } from '../inputTypeSchemas/OrderIncludeSchema'
import { OrderWhereInputSchema } from '../inputTypeSchemas/OrderWhereInputSchema'
import { OrderOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrderOrderByWithRelationInputSchema'
import { OrderWhereUniqueInputSchema } from '../inputTypeSchemas/OrderWhereUniqueInputSchema'
import { OrderScalarFieldEnumSchema } from '../inputTypeSchemas/OrderScalarFieldEnumSchema'
import { OrderItemFindManyArgsSchema } from "../outputTypeSchemas/OrderItemFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AffiliateArgsSchema } from "../outputTypeSchemas/AffiliateArgsSchema"
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { ShippingMethodArgsSchema } from "../outputTypeSchemas/ShippingMethodArgsSchema"
import { PaymentMethodArgsSchema } from "../outputTypeSchemas/PaymentMethodArgsSchema"
import { OrderCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
  id: z.boolean().optional(),
  orderCode: z.boolean().optional(),
  status: z.boolean().optional(),
  paymentStatus: z.boolean().optional(),
  totalAmount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  affiliateId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  shippingMethodId: z.boolean().optional(),
  paymentMethodId: z.boolean().optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  affiliate: z.union([z.boolean(),z.lazy(() => AffiliateArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  shippingMethod: z.union([z.boolean(),z.lazy(() => ShippingMethodArgsSchema)]).optional(),
  paymentMethod: z.union([z.boolean(),z.lazy(() => PaymentMethodArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default OrderFindFirstOrThrowArgsSchema;
