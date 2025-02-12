import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// ORDER ITEM SCHEMA
/////////////////////////////////////////

export const OrderItemSchema = z.object({
  id: z.string().uuid(),
  priceAtTimeOfOrder: z.instanceof(Prisma.Decimal, { message: "Field 'priceAtTimeOfOrder' must be a Decimal. Location: ['Models', 'OrderItem']"}),
  quantity: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  orderId: z.string(),
  productId: z.string(),
})

export type OrderItem = z.infer<typeof OrderItemSchema>

export default OrderItemSchema;
