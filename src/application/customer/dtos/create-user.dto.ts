import UserSchema from 'src/domain/models/UserSchema';
import { z } from 'zod';

export const CreateUserUseCaseSchema = UserSchema.pick({
  email: true,
  password: true,
  first_name: true,
  last_name: true,
  phone: true,
  code_id: true,
  code_expiredAt: true,
});
export type CreateUserUseCaseDto = z.infer<typeof CreateUserUseCaseSchema>;

export const CreateUserUseCaseResultSchema = UserSchema.required();
export type CreateUserUseCaseResultDto = z.infer<
  typeof CreateUserUseCaseResultSchema
>;
