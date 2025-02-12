import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','role','email','password','firstName','lastName','phone','twoFAEnabled','status','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
