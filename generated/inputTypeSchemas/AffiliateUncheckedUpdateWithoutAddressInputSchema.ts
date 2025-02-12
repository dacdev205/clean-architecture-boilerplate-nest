import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OrderUncheckedUpdateManyWithoutAffiliateNestedInputSchema } from './OrderUncheckedUpdateManyWithoutAffiliateNestedInputSchema';

export const AffiliateUncheckedUpdateWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateUncheckedUpdateWithoutAddressInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Order: z.lazy(() => OrderUncheckedUpdateManyWithoutAffiliateNestedInputSchema).optional()
}).strict();

export default AffiliateUncheckedUpdateWithoutAddressInputSchema;
