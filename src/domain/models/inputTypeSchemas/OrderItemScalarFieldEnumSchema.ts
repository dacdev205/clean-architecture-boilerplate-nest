import { z } from 'zod';

export const OrderItemScalarFieldEnumSchema = z.enum(['id','price_at_time_of_order','quantity','deleted_at','created_at','updated_at','order_id','product_id']);

export default OrderItemScalarFieldEnumSchema;
