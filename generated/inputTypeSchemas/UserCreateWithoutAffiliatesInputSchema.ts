import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { StatusSchema } from './StatusSchema';
import { AddressCreateNestedManyWithoutUserInputSchema } from './AddressCreateNestedManyWithoutUserInputSchema';
import { OrderCreateNestedManyWithoutUserInputSchema } from './OrderCreateNestedManyWithoutUserInputSchema';
import { CartCreateNestedManyWithoutUserInputSchema } from './CartCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutAffiliatesInputSchema: z.ZodType<Prisma.UserCreateWithoutAffiliatesInput> = z.object({
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
  addresses: z.lazy(() => AddressCreateNestedManyWithoutUserInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputSchema).optional(),
  carts: z.lazy(() => CartCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutAffiliatesInputSchema;
