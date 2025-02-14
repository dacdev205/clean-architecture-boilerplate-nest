import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id','orderCode','status','payment_status','total_amount','commission_amount','deleted_at','created_at','updated_at','user_id','affiliate_id','address_id','shipping_method_id','payment_method_id']);

export default OrderScalarFieldEnumSchema;
