import { z } from 'zod';
import RoleSchema from './inputTypeSchemas/RoleSchema';
import StatusSchema from './inputTypeSchemas/StatusSchema';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  status: StatusSchema,
  id: z.string().uuid(),
  email: z.string().email(),
  password: z.string().min(8),
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string(),
  two_FA_enabled: z.boolean(),
  code_id: z.string().nullish(),
  code_expiredAt: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

export default UserSchema;
