import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderUncheckedCreateNestedManyWithoutAddressInputSchema } from './OrderUncheckedCreateNestedManyWithoutAddressInputSchema';

export const AddressUncheckedCreateWithoutAffiliateInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutAffiliateInput> = z.object({
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
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default AddressUncheckedCreateWithoutAffiliateInputSchema;
