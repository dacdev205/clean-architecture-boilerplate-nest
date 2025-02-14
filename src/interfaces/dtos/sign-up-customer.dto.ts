import { z } from 'zod';

export const SignUpCustomerRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string(),
});
export type SignUpCustomerRequestDto = z.infer<
  typeof SignUpCustomerRequestSchema
>;

export const SignUpCustomerResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type SignUpCustomerResponseDto = z.infer<
  typeof SignUpCustomerResponseSchema
>;
