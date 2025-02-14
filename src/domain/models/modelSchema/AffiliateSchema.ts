import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// AFFILIATE SCHEMA
/////////////////////////////////////////

export const AffiliateSchema = z.object({
  id: z.string().uuid(),
  business_name: z.string(),
  commission_rate: z.instanceof(Prisma.Decimal, { message: "Field 'commission_rate' must be a Decimal. Location: ['Models', 'Affiliate']"}),
  deleted_at: z.coerce.date().nullish(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullish(),
  user_id: z.string(),
  address_id: z.string().nullish(),
})

export type Affiliate = z.infer<typeof AffiliateSchema>

export default AffiliateSchema;
