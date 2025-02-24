import UserSchema from 'src/domain/models/UserSchema';
import { z } from 'zod';

export const CustomerSignInUseCaseSchema = UserSchema.pick({
  email: true,
  password: true,
});
export type CustomerSignInUseCaseDto = z.infer<
  typeof CustomerSignInUseCaseSchema
>;

export const CustomerSignInUseCaseResultSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type CustomerSignInUseCaseResultDto = z.infer<
  typeof CustomerSignInUseCaseResultSchema
>;
