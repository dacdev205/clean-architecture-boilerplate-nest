import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutOrdersInputSchema } from './UserCreateWithoutOrdersInputSchema';
import { UserUncheckedCreateWithoutOrdersInputSchema } from './UserUncheckedCreateWithoutOrdersInputSchema';
import { UserCreateOrConnectWithoutOrdersInputSchema } from './UserCreateOrConnectWithoutOrdersInputSchema';
import { UserUpsertWithoutOrdersInputSchema } from './UserUpsertWithoutOrdersInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutOrdersInputSchema } from './UserUpdateToOneWithWhereWithoutOrdersInputSchema';
import { UserUpdateWithoutOrdersInputSchema } from './UserUpdateWithoutOrdersInputSchema';
import { UserUncheckedUpdateWithoutOrdersInputSchema } from './UserUncheckedUpdateWithoutOrdersInputSchema';

export const UserUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOrdersInputSchema),z.lazy(() => UserUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => UserUpdateWithoutOrdersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutOrdersNestedInputSchema;
