import CategorySchema from 'src/domain/models/CategorySchema';
import { z } from 'zod';

export const CreateCategoryUseCaseSchema = CategorySchema.pick({
  name: true,
});
export type CreateCategoryUseCaseDto = z.infer<
  typeof CreateCategoryUseCaseSchema
>;

export const CreateCategoryUseCaseResultSchema = CategorySchema.required();
export type CreateCategoryUseCaseResultDto = z.infer<
  typeof CreateCategoryUseCaseResultSchema
>;
