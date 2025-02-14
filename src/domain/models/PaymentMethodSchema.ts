import { z } from 'zod';
import PaymentMethodTypeSchema from './inputTypeSchemas/PaymentMethodTypeSchema';

/////////////////////////////////////////
// PAYMENT METHOD SCHEMA
/////////////////////////////////////////

export const PaymentMethodSchema = z.object({
  method: PaymentMethodTypeSchema,
  id: z.string().uuid(),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
});

export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;

export default PaymentMethodSchema;
