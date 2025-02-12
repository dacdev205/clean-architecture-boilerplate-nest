import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAddressesInputSchema } from './UserCreateWithoutAddressesInputSchema';
import { UserUncheckedCreateWithoutAddressesInputSchema } from './UserUncheckedCreateWithoutAddressesInputSchema';
import { UserCreateOrConnectWithoutAddressesInputSchema } from './UserCreateOrConnectWithoutAddressesInputSchema';
import { UserUpsertWithoutAddressesInputSchema } from './UserUpsertWithoutAddressesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutAddressesInputSchema } from './UserUpdateToOneWithWhereWithoutAddressesInputSchema';
import { UserUpdateWithoutAddressesInputSchema } from './UserUpdateWithoutAddressesInputSchema';
import { UserUncheckedUpdateWithoutAddressesInputSchema } from './UserUncheckedUpdateWithoutAddressesInputSchema';

export const UserUpdateOneRequiredWithoutAddressesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAddressesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAddressesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAddressesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAddressesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAddressesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAddressesInputSchema),z.lazy(() => UserUpdateWithoutAddressesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAddressesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutAddressesNestedInputSchema;
