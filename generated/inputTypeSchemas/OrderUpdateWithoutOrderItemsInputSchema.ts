import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OrderStatusSchema } from './OrderStatusSchema';
import { EnumOrderStatusFieldUpdateOperationsInputSchema } from './EnumOrderStatusFieldUpdateOperationsInputSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { EnumPaymentStatusFieldUpdateOperationsInputSchema } from './EnumPaymentStatusFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutOrdersNestedInputSchema } from './UserUpdateOneRequiredWithoutOrdersNestedInputSchema';
import { AffiliateUpdateOneWithoutOrderNestedInputSchema } from './AffiliateUpdateOneWithoutOrderNestedInputSchema';
import { AddressUpdateOneRequiredWithoutOrdersNestedInputSchema } from './AddressUpdateOneRequiredWithoutOrdersNestedInputSchema';
import { ShippingMethodUpdateOneRequiredWithoutOrdersNestedInputSchema } from './ShippingMethodUpdateOneRequiredWithoutOrdersNestedInputSchema';
import { PaymentMethodUpdateOneRequiredWithoutOrdersNestedInputSchema } from './PaymentMethodUpdateOneRequiredWithoutOrdersNestedInputSchema';

export const OrderUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpdateWithoutOrderItemsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => PaymentStatusSchema),z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema) ]).optional(),
  totalAmount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutOrdersNestedInputSchema).optional(),
  affiliate: z.lazy(() => AffiliateUpdateOneWithoutOrderNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutOrdersNestedInputSchema).optional(),
  shippingMethod: z.lazy(() => ShippingMethodUpdateOneRequiredWithoutOrdersNestedInputSchema).optional(),
  paymentMethod: z.lazy(() => PaymentMethodUpdateOneRequiredWithoutOrdersNestedInputSchema).optional()
}).strict();

export default OrderUpdateWithoutOrderItemsInputSchema;
