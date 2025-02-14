import { z } from 'zod';

export const ShippingMethodScalarFieldEnumSchema = z.enum(['id','type','fee','deleted_at','created_at','updated_at']);

export default ShippingMethodScalarFieldEnumSchema;
