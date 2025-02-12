import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OrderItemOrderByRelationAggregateInputSchema } from './OrderItemOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { AffiliateOrderByWithRelationInputSchema } from './AffiliateOrderByWithRelationInputSchema';
import { AddressOrderByWithRelationInputSchema } from './AddressOrderByWithRelationInputSchema';
import { ShippingMethodOrderByWithRelationInputSchema } from './ShippingMethodOrderByWithRelationInputSchema';
import { PaymentMethodOrderByWithRelationInputSchema } from './PaymentMethodOrderByWithRelationInputSchema';

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  orderCode: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  paymentStatus: z.lazy(() => SortOrderSchema).optional(),
  totalAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  affiliateId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  shippingMethodId: z.lazy(() => SortOrderSchema).optional(),
  paymentMethodId: z.lazy(() => SortOrderSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  affiliate: z.lazy(() => AffiliateOrderByWithRelationInputSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
  shippingMethod: z.lazy(() => ShippingMethodOrderByWithRelationInputSchema).optional(),
  paymentMethod: z.lazy(() => PaymentMethodOrderByWithRelationInputSchema).optional()
}).strict();

export default OrderOrderByWithRelationInputSchema;
