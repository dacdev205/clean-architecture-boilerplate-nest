import { z } from 'zod';

export const CustomerSignInRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type CustomerSignInRequestDto = z.infer<
  typeof CustomerSignInRequestSchema
>;
export const CustomerSignInResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type CustomerSignInResponseDto = z.infer<
  typeof CustomerSignInResponseSchema
>;
