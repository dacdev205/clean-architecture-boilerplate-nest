import { z } from 'zod';

export const CreateUserRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string(),
});

export type CreateUserRequestDto = z.infer<typeof CreateUserRequestSchema>;

export const CreateUserResponseSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  phone: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
});

export type CreateUserResponseDto = z.infer<typeof CreateUserResponseSchema>;
