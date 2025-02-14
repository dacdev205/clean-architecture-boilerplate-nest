import { z } from 'zod';

/////////////////////////////////////////
// CART SCHEMA
/////////////////////////////////////////

export const CartSchema = z.object({
  id: z.string().uuid(),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  user_id: z.string(),
})

export type Cart = z.infer<typeof CartSchema>

export default CartSchema;
