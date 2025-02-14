import { z } from 'zod';

export const PaymentStatusSchema = z.enum(['Pending','Paid','Failed','Refunded']);

export type PaymentStatusType = `${z.infer<typeof PaymentStatusSchema>}`

export default PaymentStatusSchema;
