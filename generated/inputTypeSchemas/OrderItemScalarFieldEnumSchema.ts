import { z } from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum(['id','priceAtTimeOfOrder','quantity','createdAt','updatedAt','orderId','productId']);

export default OrderItemScalarFieldEnumSchema;
