import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { OrderStatusSchema } from '../inputTypeSchemas/OrderStatusSchema'
import { PaymentStatusSchema } from '../inputTypeSchemas/PaymentStatusSchema'

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  status: OrderStatusSchema,
  paymentStatus: PaymentStatusSchema,
  id: z.string().uuid(),
  orderCode: z.string(),
  totalAmount: z.instanceof(Prisma.Decimal, { message: "Field 'totalAmount' must be a Decimal. Location: ['Models', 'Order']"}),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
  affiliateId: z.string().nullable(),
  addressId: z.string(),
  shippingMethodId: z.string(),
  paymentMethodId: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

export default OrderSchema;
