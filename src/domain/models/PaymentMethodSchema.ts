import PaymentMethodTypeSchema from 'generated/inputTypeSchemas/PaymentMethodTypeSchema';
import { z } from 'zod';

/////////////////////////////////////////
// PAYMENT METHOD SCHEMA
/////////////////////////////////////////

export const PaymentMethodSchema = z.object({
  method: PaymentMethodTypeSchema,
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;

export default PaymentMethodSchema;
