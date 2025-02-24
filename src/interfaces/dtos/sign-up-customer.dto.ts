import { z } from 'zod';

export const CustomerSignUpRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string(),
});
export type CustomerSignUpRequestDto = z.infer<
  typeof CustomerSignUpRequestSchema
>;

export const CustomerSignUpResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type CustomerSignUpResponseDto = z.infer<
  typeof CustomerSignUpResponseSchema
>;
