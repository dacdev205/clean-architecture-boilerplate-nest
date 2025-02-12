import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutAddressInputSchema } from './OrderUncheckedCreateNestedManyWithoutAddressInputSchema';
import { AffiliateUncheckedCreateNestedManyWithoutAddressInputSchema } from './AffiliateUncheckedCreateNestedManyWithoutAddressInputSchema';

export const AddressUncheckedCreateInputSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = z.object({
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
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutAddressInputSchema).optional(),
  Affiliate: z.lazy(() => AffiliateUncheckedCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default AddressUncheckedCreateInputSchema;
