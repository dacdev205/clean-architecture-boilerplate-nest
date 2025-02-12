import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderStatusSchema } from './OrderStatusSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { OrderItemCreateNestedManyWithoutOrderInputSchema } from './OrderItemCreateNestedManyWithoutOrderInputSchema';
import { AffiliateCreateNestedOneWithoutOrderInputSchema } from './AffiliateCreateNestedOneWithoutOrderInputSchema';
import { AddressCreateNestedOneWithoutOrdersInputSchema } from './AddressCreateNestedOneWithoutOrdersInputSchema';
import { ShippingMethodCreateNestedOneWithoutOrdersInputSchema } from './ShippingMethodCreateNestedOneWithoutOrdersInputSchema';
import { PaymentMethodCreateNestedOneWithoutOrdersInputSchema } from './PaymentMethodCreateNestedOneWithoutOrdersInputSchema';

export const OrderCreateWithoutUserInputSchema: z.ZodType<Prisma.OrderCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  orderCode: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  paymentStatus: z.lazy(() => PaymentStatusSchema).optional(),
  totalAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  affiliate: z.lazy(() => AffiliateCreateNestedOneWithoutOrderInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutOrdersInputSchema),
  shippingMethod: z.lazy(() => ShippingMethodCreateNestedOneWithoutOrdersInputSchema),
  paymentMethod: z.lazy(() => PaymentMethodCreateNestedOneWithoutOrdersInputSchema)
}).strict();

export default OrderCreateWithoutUserInputSchema;
