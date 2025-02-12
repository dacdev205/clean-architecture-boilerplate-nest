import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutAddressesInputSchema } from './UserCreateNestedOneWithoutAddressesInputSchema';
import { AffiliateCreateNestedManyWithoutAddressInputSchema } from './AffiliateCreateNestedManyWithoutAddressInputSchema';

export const AddressCreateWithoutOrdersInputSchema: z.ZodType<Prisma.AddressCreateWithoutOrdersInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  phone: z.string(),
  city: z.string(),
  district: z.string(),
  ward: z.string(),
  street: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAddressesInputSchema),
  Affiliate: z.lazy(() => AffiliateCreateNestedManyWithoutAddressInputSchema).optional()
}).strict();

export default AddressCreateWithoutOrdersInputSchema;
