import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// AFFILIATE SCHEMA
/////////////////////////////////////////

export const AffiliateSchema = z.object({
  id: z.string().uuid(),
  businessName: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  commissionRate: z.instanceof(Prisma.Decimal, { message: "Field 'commissionRate' must be a Decimal. Location: ['Models', 'Affiliate']"}),
  userId: z.string(),
  addressId: z.string().nullable(),
})

export type Affiliate = z.infer<typeof AffiliateSchema>

export default AffiliateSchema;
