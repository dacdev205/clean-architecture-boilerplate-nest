import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutAffiliatesInputSchema } from './UserCreateNestedOneWithoutAffiliatesInputSchema';
import { AddressCreateNestedOneWithoutAffiliateInputSchema } from './AddressCreateNestedOneWithoutAffiliateInputSchema';
import { OrderCreateNestedManyWithoutAffiliateInputSchema } from './OrderCreateNestedManyWithoutAffiliateInputSchema';

export const AffiliateCreateInputSchema: z.ZodType<Prisma.AffiliateCreateInput> = z.object({
  id: z.string().uuid().optional(),
  businessName: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAffiliatesInputSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutAffiliateInputSchema).optional(),
  Order: z.lazy(() => OrderCreateNestedManyWithoutAffiliateInputSchema).optional()
}).strict();

export default AffiliateCreateInputSchema;
