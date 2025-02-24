import UserSchema from 'src/domain/models/UserSchema';
import { z } from 'zod';

export const CustomerSignUpUseCaseSchema = UserSchema.pick({
  email: true,
  password: true,
  first_name: true,
  last_name: true,
  phone: true,
});
export type CustomerSignUpUseCaseDto = z.infer<
  typeof CustomerSignUpUseCaseSchema
>;

export const CustomerSignUpUseCaseResultSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type CustomerSignUpUseCaseResultDto = z.infer<
  typeof CustomerSignUpUseCaseResultSchema
>;
