import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AddressArgsSchema } from "../outputTypeSchemas/AddressArgsSchema"
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { AffiliateCountOutputTypeArgsSchema } from "../outputTypeSchemas/AffiliateCountOutputTypeArgsSchema"

export const AffiliateIncludeSchema: z.ZodType<Prisma.AffiliateInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  Order: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AffiliateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AffiliateIncludeSchema;
