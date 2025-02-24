import { z } from 'zod';

export const AuthResultSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
});
export type AuthResultDto = z.infer<typeof AuthResultSchema>;
