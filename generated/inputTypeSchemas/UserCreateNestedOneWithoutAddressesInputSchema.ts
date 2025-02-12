import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAddressesInputSchema } from './UserCreateWithoutAddressesInputSchema';
import { UserUncheckedCreateWithoutAddressesInputSchema } from './UserUncheckedCreateWithoutAddressesInputSchema';
import { UserCreateOrConnectWithoutAddressesInputSchema } from './UserCreateOrConnectWithoutAddressesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutAddressesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAddressesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAddressesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAddressesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAddressesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutAddressesInputSchema;
