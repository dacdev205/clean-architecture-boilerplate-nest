import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OrderCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderCountOutputTypeSelect> = z.object({
  orderItems: z.boolean().optional(),
}).strict();

export default OrderCountOutputTypeSelectSchema;
