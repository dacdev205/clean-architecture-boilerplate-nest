import { z } from 'zod';

export const SignInCustomerResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type SignInCustomerResponseDto = z.infer<
  typeof SignInCustomerResponseSchema
>;
