import { z } from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum(['id','quantity','deleted_at','created_at','updated_at','product_id','cart_id']);

export default CartItemScalarFieldEnumSchema;
