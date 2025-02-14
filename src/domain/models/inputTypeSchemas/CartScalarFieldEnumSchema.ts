import { z } from 'zod';

export const CartScalarFieldEnumSchema = z.enum(['id','deleted_at','created_at','updated_at','user_id']);

export default CartScalarFieldEnumSchema;
