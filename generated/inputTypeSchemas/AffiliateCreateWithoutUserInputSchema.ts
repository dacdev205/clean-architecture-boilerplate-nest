import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateNestedOneWithoutAffiliateInputSchema } from './AddressCreateNestedOneWithoutAffiliateInputSchema';
import { OrderCreateNestedManyWithoutAffiliateInputSchema } from './OrderCreateNestedManyWithoutAffiliateInputSchema';

export const AffiliateCreateWithoutUserInputSchema: z.ZodType<Prisma.AffiliateCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutAffiliateInputSchema).optional(),
  Order: z.lazy(() => OrderCreateNestedManyWithoutAffiliateInputSchema).optional()
}).strict();

export default AffiliateCreateWithoutUserInputSchema;
