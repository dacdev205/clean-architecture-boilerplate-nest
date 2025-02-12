import { z } from 'zod';

export const ShippingMethodScalarFieldEnumSchema = z.enum(['id','type','fee','createdAt','updatedAt']);

export default ShippingMethodScalarFieldEnumSchema;
