import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AffiliateIncludeSchema } from '../inputTypeSchemas/AffiliateIncludeSchema'
import { AffiliateCreateInputSchema } from '../inputTypeSchemas/AffiliateCreateInputSchema'
import { AffiliateUncheckedCreateInputSchema } from '../inputTypeSchemas/AffiliateUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { AffiliateCountOutputTypeArgsSchema } from "../outputTypeSchemas/AffiliateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AffiliateSelectSchema: z.ZodType<Prisma.AffiliateSelect> = z.object({
  id: z.boolean().optional(),
  businessName: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  Order: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AffiliateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AffiliateCreateArgsSchema: z.ZodType<Prisma.AffiliateCreateArgs> = z.object({
  select: AffiliateSelectSchema.optional(),
  include: z.lazy(() => AffiliateIncludeSchema).optional(),
  data: z.union([ AffiliateCreateInputSchema,AffiliateUncheckedCreateInputSchema ]),
}).strict() ;

export default AffiliateCreateArgsSchema;
