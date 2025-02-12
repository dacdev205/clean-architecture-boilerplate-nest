import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema } from './UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema';
import { OrderUpdateManyWithoutAffiliateNestedInputSchema } from './OrderUpdateManyWithoutAffiliateNestedInputSchema';

export const AffiliateUpdateWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateUpdateWithoutAddressInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUpdateManyWithoutAffiliateNestedInputSchema).optional()
}).strict();

export default AffiliateUpdateWithoutAddressInputSchema;
