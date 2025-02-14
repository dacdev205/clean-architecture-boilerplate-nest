import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','name','price','quantity','slug','discount','url_source','images','deleted_at','created_at','updated_at','category_id']);

export default ProductScalarFieldEnumSchema;
