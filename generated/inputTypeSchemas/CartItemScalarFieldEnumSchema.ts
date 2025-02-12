import { z } from 'zod';

export const CartItemScalarFieldEnumSchema = z.enum(['id','quantity','createdAt','updatedAt','productId','cartId']);

export default CartItemScalarFieldEnumSchema;
