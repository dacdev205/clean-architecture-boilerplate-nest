import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// ORDER ITEM SCHEMA
/////////////////////////////////////////

export const OrderItemSchema = z.object({
  id: z.string().uuid(),
  price_at_time_of_order: z.instanceof(Prisma.Decimal, { message: "Field 'price_at_time_of_order' must be a Decimal. Location: ['Models', 'OrderItem']"}),
  quantity: z.number().int(),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  order_id: z.string(),
  product_id: z.string(),
})

export type OrderItem = z.infer<typeof OrderItemSchema>

export default OrderItemSchema;
