import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressFindManyArgsSchema } from "../outputTypeSchemas/AddressFindManyArgsSchema"
import { AffiliateFindManyArgsSchema } from "../outputTypeSchemas/AffiliateFindManyArgsSchema"
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { CartFindManyArgsSchema } from "../outputTypeSchemas/CartFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  addresses: z.union([z.boolean(),z.lazy(() => AddressFindManyArgsSchema)]).optional(),
  affiliates: z.union([z.boolean(),z.lazy(() => AffiliateFindManyArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  carts: z.union([z.boolean(),z.lazy(() => CartFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
