import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AddressCountOutputTypeSelectSchema: z.ZodType<Prisma.AddressCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
  Affiliate: z.boolean().optional(),
}).strict();

export default AddressCountOutputTypeSelectSchema;
