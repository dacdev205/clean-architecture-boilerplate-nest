import UserSchema from 'src/domain/models/UserSchema';
import { z } from 'zod';

export const SignUpCustomerUseCaseSchema = UserSchema.pick({
  email: true,
  password: true,
  first_name: true,
  last_name: true,
  phone: true,
});
export type SignUpCustomerUseCaseDto = z.infer<
  typeof SignUpCustomerUseCaseSchema
>;

export const SignUpCustomerUseCaseResultSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type SignUpCustomerUseCaseResultDto = z.infer<
  typeof SignUpCustomerUseCaseResultSchema
>;
