import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutAffiliatesInputSchema } from './UserUpdateWithoutAffiliatesInputSchema';
import { UserUncheckedUpdateWithoutAffiliatesInputSchema } from './UserUncheckedUpdateWithoutAffiliatesInputSchema';

export const UserUpdateToOneWithWhereWithoutAffiliatesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAffiliatesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAffiliatesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAffiliatesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutAffiliatesInputSchema;
