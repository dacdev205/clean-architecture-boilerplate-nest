import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateNestedManyWithoutAddressInputSchema } from './OrderCreateNestedManyWithoutAddressInputSchema';
import { UserCreateNestedOneWithoutAddressesInputSchema } from './UserCreateNestedOneWithoutAddressesInputSchema';

export const AddressCreateWithoutAffiliateInputSchema: z.ZodType<Prisma.AddressCreateWithoutAffiliateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  phone: z.string(),
  city: z.string(),
  district: z.string(),
  ward: z.string(),
  street: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutAddressInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAddressesInputSchema)
}).strict();

export default AddressCreateWithoutAffiliateInputSchema;
