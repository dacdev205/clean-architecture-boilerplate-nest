import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingTypeSchema } from './ShippingTypeSchema';

export const EnumShippingTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumShippingTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ShippingTypeSchema).optional()
}).strict();

export default EnumShippingTypeFieldUpdateOperationsInputSchema;
