import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema } from './UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema';
import { AddressUpdateOneWithoutAffiliateNestedInputSchema } from './AddressUpdateOneWithoutAffiliateNestedInputSchema';

export const AffiliateUpdateWithoutOrderInputSchema: z.ZodType<Prisma.AffiliateUpdateWithoutOrderInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutAffiliateNestedInputSchema).optional()
}).strict();

export default AffiliateUpdateWithoutOrderInputSchema;
