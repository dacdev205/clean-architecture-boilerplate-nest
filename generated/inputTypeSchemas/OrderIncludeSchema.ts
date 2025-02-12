import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemFindManyArgsSchema } from "../outputTypeSchemas/OrderItemFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AffiliateArgsSchema } from "../outputTypeSchemas/AffiliateArgsSchema"
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { ShippingMethodArgsSchema } from "../outputTypeSchemas/ShippingMethodArgsSchema"
import { PaymentMethodArgsSchema } from "../outputTypeSchemas/PaymentMethodArgsSchema"
import { OrderCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderCountOutputTypeArgsSchema"

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  affiliate: z.union([z.boolean(),z.lazy(() => AffiliateArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  shippingMethod: z.union([z.boolean(),z.lazy(() => ShippingMethodArgsSchema)]).optional(),
  paymentMethod: z.union([z.boolean(),z.lazy(() => PaymentMethodArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default OrderIncludeSchema;
