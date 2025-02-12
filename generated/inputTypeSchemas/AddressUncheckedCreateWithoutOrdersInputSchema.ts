import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateUncheckedCreateNestedManyWithoutAddressInputSchema } from './AffiliateUncheckedCreateNestedManyWithoutAddressInputSchema';

export const AddressUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  phone: z.string(),
  city: z.string(),
  district: z.string(),
  ward: z.string(),
  street: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  Affiliate: z.lazy(() => AffiliateUncheckedCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default AddressUncheckedCreateWithoutOrdersInputSchema;
