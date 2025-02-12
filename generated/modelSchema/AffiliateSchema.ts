import { z } from 'zod';

/////////////////////////////////////////
// AFFILIATE SCHEMA
/////////////////////////////////////////

export const AffiliateSchema = z.object({
  id: z.string().uuid(),
  businessName: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
  addressId: z.string().nullable(),
})

export type Affiliate = z.infer<typeof AffiliateSchema>

export default AffiliateSchema;
