import { z } from 'zod';

export const SignInCustomerRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInCustomerRequestDto = z.infer<
  typeof SignInCustomerRequestSchema
>;
export const SignInCustomerResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type SignInCustomerResponseDto = z.infer<
  typeof SignInCustomerResponseSchema
>;
