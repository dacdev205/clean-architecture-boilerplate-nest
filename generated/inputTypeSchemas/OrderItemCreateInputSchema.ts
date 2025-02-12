import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { OrderCreateNestedOneWithoutOrderItemsInputSchema } from './OrderCreateNestedOneWithoutOrderItemsInputSchema';
import { ProductCreateNestedOneWithoutOrderItemsInputSchema } from './ProductCreateNestedOneWithoutOrderItemsInputSchema';

export const OrderItemCreateInputSchema: z.ZodType<Prisma.OrderItemCreateInput> = z.object({
  id: z.string().uuid().optional(),
  priceAtTimeOfOrder: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  quantity: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema)
}).strict();

export default OrderItemCreateInputSchema;
