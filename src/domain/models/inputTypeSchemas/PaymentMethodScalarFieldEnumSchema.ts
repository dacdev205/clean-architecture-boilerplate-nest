import { z } from 'zod';

export const PaymentMethodScalarFieldEnumSchema = z.enum(['id','method','deleted_at','created_at','updated_at']);

export default PaymentMethodScalarFieldEnumSchema;
