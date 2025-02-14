import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','role','email','password','first_name','last_name','phone','two_FA_enabled','code_id','code_expiredAt','status','created_at','updated_at']);

export default UserScalarFieldEnumSchema;
