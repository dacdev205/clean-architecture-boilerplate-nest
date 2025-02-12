import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';
import { StatusSchema } from './StatusSchema';
import { AddressUncheckedCreateNestedManyWithoutUserInputSchema } from './AddressUncheckedCreateNestedManyWithoutUserInputSchema';
import { AffiliateUncheckedCreateNestedManyWithoutUserInputSchema } from './AffiliateUncheckedCreateNestedManyWithoutUserInputSchema';
import { OrderUncheckedCreateNestedManyWithoutUserInputSchema } from './OrderUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutCartsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCartsInput> = z.object({
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
  addresses: z.lazy(() => AddressUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  affiliates: z.lazy(() => AffiliateUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutCartsInputSchema;
