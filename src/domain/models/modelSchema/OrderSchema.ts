import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { OrderStatusSchema } from '../inputTypeSchemas/OrderStatusSchema'
import { PaymentStatusSchema } from '../inputTypeSchemas/PaymentStatusSchema'

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  status: OrderStatusSchema,
  payment_status: PaymentStatusSchema,
  id: z.string().uuid(),
  orderCode: z.string(),
  total_amount: z.instanceof(Prisma.Decimal, { message: "Field 'total_amount' must be a Decimal. Location: ['Models', 'Order']"}),
  commission_amount: z.number().nullish(),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  user_id: z.string(),
  affiliate_id: z.string().nullish(),
  address_id: z.string(),
  shipping_method_id: z.string(),
  payment_method_id: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

export default OrderSchema;
