import { z } from 'zod';

/////////////////////////////////////////
// CART ITEM SCHEMA
/////////////////////////////////////////

export const CartItemSchema = z.object({
  id: z.string().uuid(),
  quantity: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  productId: z.string(),
  cartId: z.string(),
})

export type CartItem = z.infer<typeof CartItemSchema>

export default CartItemSchema;
