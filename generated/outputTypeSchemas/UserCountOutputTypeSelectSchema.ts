import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  addresses: z.boolean().optional(),
  affiliates: z.boolean().optional(),
  orders: z.boolean().optional(),
  carts: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
