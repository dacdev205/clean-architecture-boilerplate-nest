import { z } from 'zod';

/////////////////////////////////////////
// CART ITEM SCHEMA
/////////////////////////////////////////

export const CartItemSchema = z.object({
  id: z.string().uuid(),
  quantity: z.number().int(),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  product_id: z.string(),
  cart_id: z.string(),
})

export type CartItem = z.infer<typeof CartItemSchema>

export default CartItemSchema;
