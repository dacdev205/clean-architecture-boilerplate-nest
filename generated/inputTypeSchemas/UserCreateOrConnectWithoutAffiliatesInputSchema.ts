import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutAffiliatesInputSchema } from './UserCreateWithoutAffiliatesInputSchema';
import { UserUncheckedCreateWithoutAffiliatesInputSchema } from './UserUncheckedCreateWithoutAffiliatesInputSchema';

export const UserCreateOrConnectWithoutAffiliatesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAffiliatesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAffiliatesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAffiliatesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutAffiliatesInputSchema;
