import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id','orderCode','status','paymentStatus','totalAmount','createdAt','updatedAt','userId','affiliateId','addressId','shippingMethodId','paymentMethodId']);

export default OrderScalarFieldEnumSchema;
