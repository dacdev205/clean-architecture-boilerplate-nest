import RoleSchema from 'generated/inputTypeSchemas/RoleSchema';
import StatusSchema from 'generated/inputTypeSchemas/StatusSchema';
import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  status: StatusSchema,
  id: z.string().uuid(),
  email: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  twoFAEnabled: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

export default UserSchema;
