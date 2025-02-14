import UserSchema from 'src/domain/models/UserSchema';
import { z } from 'zod';

export const UserProfileResponseSchema = UserSchema.pick({
  id: true,
  role: true,
  status: true,
  email: true,
  first_name: true,
  last_name: true,
  phone: true,
  two_FA_enabled: true,
  created_at: true,
  updated_at: true,
});
export type UserProfileResponseDto = z.infer<typeof UserProfileResponseSchema>;
