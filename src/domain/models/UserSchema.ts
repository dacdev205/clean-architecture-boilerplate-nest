import { z } from 'zod';
import { ROLESSchema } from '../../../generated/inputTypeSchemas/ROLESSchema';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  roles: ROLESSchema,
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string(),
  password: z.string(),
  isActive: z.boolean(),
  codeId: z.string().nullable(),
  codeExpiredAt: z.coerce.date().nullable(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

export default UserSchema;
