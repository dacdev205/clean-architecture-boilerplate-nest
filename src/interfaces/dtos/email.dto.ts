import { z } from 'zod';

export const EmailRequestSchema = z.object({
  email: z.string().email(),
});
export type EmailRequestDto = z.infer<typeof EmailRequestSchema>;
