import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutAffiliatesInputSchema } from './UserCreateNestedOneWithoutAffiliatesInputSchema';
import { AddressCreateNestedOneWithoutAffiliateInputSchema } from './AddressCreateNestedOneWithoutAffiliateInputSchema';

export const AffiliateCreateWithoutOrderInputSchema: z.ZodType<Prisma.AffiliateCreateWithoutOrderInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAffiliatesInputSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutAffiliateInputSchema).optional()
}).strict();

export default AffiliateCreateWithoutOrderInputSchema;
