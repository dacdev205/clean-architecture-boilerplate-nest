import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutAffiliatesInputSchema } from './UserCreateNestedOneWithoutAffiliatesInputSchema';
import { OrderCreateNestedManyWithoutAffiliateInputSchema } from './OrderCreateNestedManyWithoutAffiliateInputSchema';

export const AffiliateCreateWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateCreateWithoutAddressInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAffiliatesInputSchema),
  Order: z.lazy(() => OrderCreateNestedManyWithoutAffiliateInputSchema).optional()
}).strict();

export default AffiliateCreateWithoutAddressInputSchema;
