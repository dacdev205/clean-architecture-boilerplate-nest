import { z } from 'zod';

export const CreateCategoryRequestSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
});

export type CreateCategoryRequestDto = z.infer<
  typeof CreateCategoryRequestSchema
>;

export const CreateCategoryResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  deleted_at: z.coerce.date().nullable(),
});

export type CreateCategoryResponseDto = z.infer<
  typeof CreateCategoryResponseSchema
>;
