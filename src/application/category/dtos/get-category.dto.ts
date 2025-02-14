import CategorySchema from 'src/domain/models/CategorySchema';
import { z } from 'zod';

export const GetCategoryUseCaseSchema = CategorySchema.pick({
  id: true,
  slug: true,
  name: true,
});
export type GetCategoryUseCaseDto = z.infer<typeof GetCategoryUseCaseSchema>;

export const GetCategoryResultUseCaseSchema = CategorySchema.required();
export type GetCategoryResultUseCaseDto = z.infer<
  typeof GetCategoryResultUseCaseSchema
>;
