import { z } from 'zod';

export const OrderStatusSchema = z.enum(['New','InProcess','Delivered','Canceled','Refunded']);

export type OrderStatusType = `${z.infer<typeof OrderStatusSchema>}`

export default OrderStatusSchema;
