import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutAffiliatesInputSchema } from './UserUpdateWithoutAffiliatesInputSchema';
import { UserUncheckedUpdateWithoutAffiliatesInputSchema } from './UserUncheckedUpdateWithoutAffiliatesInputSchema';
import { UserCreateWithoutAffiliatesInputSchema } from './UserCreateWithoutAffiliatesInputSchema';
import { UserUncheckedCreateWithoutAffiliatesInputSchema } from './UserUncheckedCreateWithoutAffiliatesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutAffiliatesInputSchema: z.ZodType<Prisma.UserUpsertWithoutAffiliatesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAffiliatesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAffiliatesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAffiliatesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAffiliatesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutAffiliatesInputSchema;
