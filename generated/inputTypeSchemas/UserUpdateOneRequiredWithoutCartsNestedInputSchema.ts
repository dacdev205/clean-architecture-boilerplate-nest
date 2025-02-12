import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCartsInputSchema } from './UserCreateWithoutCartsInputSchema';
import { UserUncheckedCreateWithoutCartsInputSchema } from './UserUncheckedCreateWithoutCartsInputSchema';
import { UserCreateOrConnectWithoutCartsInputSchema } from './UserCreateOrConnectWithoutCartsInputSchema';
import { UserUpsertWithoutCartsInputSchema } from './UserUpsertWithoutCartsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCartsInputSchema } from './UserUpdateToOneWithWhereWithoutCartsInputSchema';
import { UserUpdateWithoutCartsInputSchema } from './UserUpdateWithoutCartsInputSchema';
import { UserUncheckedUpdateWithoutCartsInputSchema } from './UserUncheckedUpdateWithoutCartsInputSchema';

export const UserUpdateOneRequiredWithoutCartsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCartsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCartsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCartsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCartsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCartsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCartsInputSchema),z.lazy(() => UserUpdateWithoutCartsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCartsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCartsNestedInputSchema;
