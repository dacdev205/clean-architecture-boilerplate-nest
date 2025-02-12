import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AffiliateFindManyArgsSchema } from "../outputTypeSchemas/AffiliateFindManyArgsSchema"
import { AddressCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddressCountOutputTypeArgsSchema"

export const AddressIncludeSchema: z.ZodType<Prisma.AddressInclude> = z.object({
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Affiliate: z.union([z.boolean(),z.lazy(() => AffiliateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AddressIncludeSchema;
