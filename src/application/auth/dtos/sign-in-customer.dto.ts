import UserSchema from 'src/domain/models/UserSchema';
import { z } from 'zod';

export const SignInCustomerUseCaseSchema = UserSchema.pick({
  email: true,
  password: true,
});
export type SignInCustomerUseCaseDto = z.infer<
  typeof SignInCustomerUseCaseSchema
>;

export const SignInCustomerUseCaseResultSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type SignInCustomerUseCaseResultDto = z.infer<
  typeof SignInCustomerUseCaseResultSchema
>;
