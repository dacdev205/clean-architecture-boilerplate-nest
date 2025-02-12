import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { StatusSchema } from './StatusSchema';
import { AffiliateCreateNestedManyWithoutUserInputSchema } from './AffiliateCreateNestedManyWithoutUserInputSchema';
import { OrderCreateNestedManyWithoutUserInputSchema } from './OrderCreateNestedManyWithoutUserInputSchema';
import { CartCreateNestedManyWithoutUserInputSchema } from './CartCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutAddressesInputSchema: z.ZodType<Prisma.UserCreateWithoutAddressesInput> = z.object({
  id: z.string().uuid().optional(),
  role: z.lazy(() => RoleSchema).optional(),
  email: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  twoFAEnabled: z.boolean().optional(),
  status: z.lazy(() => StatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  affiliates: z.lazy(() => AffiliateCreateNestedManyWithoutUserInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputSchema).optional(),
  carts: z.lazy(() => CartCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutAddressesInputSchema;
