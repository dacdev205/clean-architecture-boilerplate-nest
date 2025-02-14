import { z } from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id','name','phone','city','district','ward','street','deleted_at','created_at','updated_at','user_id']);

export default AddressScalarFieldEnumSchema;
