import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumOrderStatusFilterSchema } from './EnumOrderStatusFilterSchema';
import { OrderStatusSchema } from './OrderStatusSchema';
import { EnumPaymentStatusFilterSchema } from './EnumPaymentStatusFilterSchema';
import { PaymentStatusSchema } from './PaymentStatusSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { OrderItemListRelationFilterSchema } from './OrderItemListRelationFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { AffiliateNullableScalarRelationFilterSchema } from './AffiliateNullableScalarRelationFilterSchema';
import { AffiliateWhereInputSchema } from './AffiliateWhereInputSchema';
import { AddressScalarRelationFilterSchema } from './AddressScalarRelationFilterSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';
import { ShippingMethodScalarRelationFilterSchema } from './ShippingMethodScalarRelationFilterSchema';
import { ShippingMethodWhereInputSchema } from './ShippingMethodWhereInputSchema';
import { PaymentMethodScalarRelationFilterSchema } from './PaymentMethodScalarRelationFilterSchema';
import { PaymentMethodWhereInputSchema } from './PaymentMethodWhereInputSchema';

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  orderCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  paymentStatus: z.union([ z.lazy(() => EnumPaymentStatusFilterSchema),z.lazy(() => PaymentStatusSchema) ]).optional(),
  totalAmount: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  affiliateId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addressId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  shippingMethodId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  paymentMethodId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  affiliate: z.union([ z.lazy(() => AffiliateNullableScalarRelationFilterSchema),z.lazy(() => AffiliateWhereInputSchema) ]).optional().nullable(),
  address: z.union([ z.lazy(() => AddressScalarRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  shippingMethod: z.union([ z.lazy(() => ShippingMethodScalarRelationFilterSchema),z.lazy(() => ShippingMethodWhereInputSchema) ]).optional(),
  paymentMethod: z.union([ z.lazy(() => PaymentMethodScalarRelationFilterSchema),z.lazy(() => PaymentMethodWhereInputSchema) ]).optional(),
}).strict();

export default OrderWhereInputSchema;
