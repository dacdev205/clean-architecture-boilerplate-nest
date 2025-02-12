import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodTypeSchema } from './PaymentMethodTypeSchema';

export const EnumPaymentMethodTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPaymentMethodTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => PaymentMethodTypeSchema).optional()
}).strict();

export default EnumPaymentMethodTypeFieldUpdateOperationsInputSchema;
