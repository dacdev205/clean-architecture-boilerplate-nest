import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';
import { EnumPaymentMethodTypeFieldUpdateOperationsInputSchema } from './EnumPaymentMethodTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const PaymentMethodUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.PaymentMethodUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  method: z.union([ z.lazy(() => PaymentMethodTypeSchema),z.lazy(() => EnumPaymentMethodTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PaymentMethodUpdateWithoutOrdersInputSchema;
