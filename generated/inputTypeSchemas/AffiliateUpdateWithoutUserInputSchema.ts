import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AddressUpdateOneWithoutAffiliateNestedInputSchema } from './AddressUpdateOneWithoutAffiliateNestedInputSchema';
import { OrderUpdateManyWithoutAffiliateNestedInputSchema } from './OrderUpdateManyWithoutAffiliateNestedInputSchema';

export const AffiliateUpdateWithoutUserInputSchema: z.ZodType<Prisma.AffiliateUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutAffiliateNestedInputSchema).optional(),
  Order: z.lazy(() => OrderUpdateManyWithoutAffiliateNestedInputSchema).optional()
}).strict();

export default AffiliateUpdateWithoutUserInputSchema;
