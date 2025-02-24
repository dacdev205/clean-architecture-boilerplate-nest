import { z } from 'zod';
import UserSchema from '~/domains/models/UserSchema';

export const CustomerChangePasswordUseCaseSchema = z.object({
  email: z.string().email(),
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
});

export type CustomerChangePasswordUseCaseDto = z.infer<
  typeof CustomerChangePasswordUseCaseSchema
>;

export const CustomerChangePasswordUseCaseResultSchema = UserSchema.required();
export type CustomerChangePasswordUseCaseResultDto = z.infer<
  typeof CustomerChangePasswordUseCaseResultSchema
>;
