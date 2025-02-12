import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { EnumPaymentMethodTypeFieldUpdateOperationsInputSchema } from './EnumPaymentMethodTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OrderUpdateManyWithoutPaymentMethodNestedInputSchema } from './OrderUpdateManyWithoutPaymentMethodNestedInputSchema';

export const PaymentMethodUpdateInputSchema: z.ZodType<Prisma.PaymentMethodUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodTypeSchema),z.lazy(() => EnumPaymentMethodTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutPaymentMethodNestedInputSchema).optional()
}).strict();

export default PaymentMethodUpdateInputSchema;
