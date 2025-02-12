import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','createdAt','updatedAt','deletedAt']);

export default CategoryScalarFieldEnumSchema;
