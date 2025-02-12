import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAffiliatesInputSchema } from './UserCreateWithoutAffiliatesInputSchema';
import { UserUncheckedCreateWithoutAffiliatesInputSchema } from './UserUncheckedCreateWithoutAffiliatesInputSchema';
import { UserCreateOrConnectWithoutAffiliatesInputSchema } from './UserCreateOrConnectWithoutAffiliatesInputSchema';
import { UserUpsertWithoutAffiliatesInputSchema } from './UserUpsertWithoutAffiliatesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutAffiliatesInputSchema } from './UserUpdateToOneWithWhereWithoutAffiliatesInputSchema';
import { UserUpdateWithoutAffiliatesInputSchema } from './UserUpdateWithoutAffiliatesInputSchema';
import { UserUncheckedUpdateWithoutAffiliatesInputSchema } from './UserUncheckedUpdateWithoutAffiliatesInputSchema';

export const UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAffiliatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAffiliatesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAffiliatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAffiliatesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAffiliatesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAffiliatesInputSchema),z.lazy(() => UserUpdateWithoutAffiliatesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAffiliatesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutAffiliatesNestedInputSchema;
