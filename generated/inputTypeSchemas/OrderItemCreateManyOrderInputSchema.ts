import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const OrderItemCreateManyOrderInputSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInput> = z.object({
  id: z.string().uuid().optional(),
  priceAtTimeOfOrder: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  productId: z.string()
}).strict();

export default OrderItemCreateManyOrderInputSchema;
