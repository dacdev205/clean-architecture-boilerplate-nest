import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAffiliatesInputSchema } from './UserCreateWithoutAffiliatesInputSchema';
import { UserUncheckedCreateWithoutAffiliatesInputSchema } from './UserUncheckedCreateWithoutAffiliatesInputSchema';
import { UserCreateOrConnectWithoutAffiliatesInputSchema } from './UserCreateOrConnectWithoutAffiliatesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutAffiliatesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAffiliatesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAffiliatesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAffiliatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAffiliatesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutAffiliatesInputSchema;
