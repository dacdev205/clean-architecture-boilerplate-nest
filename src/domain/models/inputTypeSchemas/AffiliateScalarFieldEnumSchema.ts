import { z } from 'zod';

export const AffiliateScalarFieldEnumSchema = z.enum(['id','business_name','commission_rate','deleted_at','created_at','updated_at','user_id','address_id']);

export default AffiliateScalarFieldEnumSchema;
