import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','slug','deleted_at','created_at','updated_at']);

export default CategoryScalarFieldEnumSchema;
