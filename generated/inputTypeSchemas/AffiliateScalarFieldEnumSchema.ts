import { z } from 'zod';

export const AffiliateScalarFieldEnumSchema = z.enum(['id','businessName','createdAt','updatedAt','userId','addressId']);

export default AffiliateScalarFieldEnumSchema;
