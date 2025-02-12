import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AffiliateFindManyArgsSchema } from "../outputTypeSchemas/AffiliateFindManyArgsSchema"
import { AddressCountOutputTypeArgsSchema } from "../outputTypeSchemas/AddressCountOutputTypeArgsSchema"

export const AddressSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  phone: z.boolean().optional(),
  city: z.boolean().optional(),
  district: z.boolean().optional(),
  ward: z.boolean().optional(),
  street: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  Affiliate: z.union([z.boolean(),z.lazy(() => AffiliateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AddressSelectSchema;
