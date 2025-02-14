import UserSchema from 'src/domain/models/UserSchema';
import { z } from 'zod';

export const GetUserUseCaseResultSchema = UserSchema.required();
export type GetUserUseCaseResultDto = z.infer<
  typeof GetUserUseCaseResultSchema
>;
