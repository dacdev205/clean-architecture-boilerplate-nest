import { z } from 'zod';

export const PaymentMethodTypeSchema = z.enum(['COD','STRIPE']);

export type PaymentMethodTypeType = `${z.infer<typeof PaymentMethodTypeSchema>}`

export default PaymentMethodTypeSchema;
