import { z } from 'zod';

export const PaymentMethodScalarFieldEnumSchema = z.enum(['id','method','createdAt','updatedAt']);

export default PaymentMethodScalarFieldEnumSchema;
