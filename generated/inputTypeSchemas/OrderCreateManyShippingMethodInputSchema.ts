import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderStatusSchema } from './OrderStatusSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const OrderCreateManyShippingMethodInputSchema: z.ZodType<Prisma.OrderCreateManyShippingMethodInput> = z.object({
  id: z.string().uuid().optional(),
  orderCode: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  paymentStatus: z.lazy(() => PaymentStatusSchema).optional(),
  totalAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  affiliateId: z.string().optional().nullable(),
  addressId: z.string(),
  paymentMethodId: z.string()
}).strict();

export default OrderCreateManyShippingMethodInputSchema;
