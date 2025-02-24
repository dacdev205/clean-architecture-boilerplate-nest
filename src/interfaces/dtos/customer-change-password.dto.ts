import { z } from 'zod';
import UserSchema from '~/domains/models/UserSchema';

export const CustomerChangePasswordSchema = z.object({
  email: z.string().email(),
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
});

export type CustomerChangePasswordRequestDto = z.infer<
  typeof CustomerChangePasswordSchema
>;

export const CustomerChangePasswordResponseSchema = UserSchema.required();
export type CustomerChangePasswordResponseDto = z.infer<
  typeof CustomerChangePasswordResponseSchema
>;
