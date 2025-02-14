import { z } from 'zod';

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  phone: z.string(),
  city: z.string(),
  district: z.string(),
  ward: z.string(),
  street: z.string(),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  user_id: z.string(),
})

export type Address = z.infer<typeof AddressSchema>

export default AddressSchema;
