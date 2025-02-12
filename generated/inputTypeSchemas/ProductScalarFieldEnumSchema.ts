import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','name','price','quantity','discount','createdAt','updatedAt','deletedAt','categoryId']);

export default ProductScalarFieldEnumSchema;
