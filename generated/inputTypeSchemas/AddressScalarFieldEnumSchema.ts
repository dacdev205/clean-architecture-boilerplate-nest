import { z } from 'zod';

export const AddressScalarFieldEnumSchema = z.enum(['id','name','phone','city','district','ward','street','createdAt','updatedAt','userId']);

export default AddressScalarFieldEnumSchema;
