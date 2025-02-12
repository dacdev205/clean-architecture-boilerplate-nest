import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressUpdateWithoutOrdersInputSchema } from './AddressUpdateWithoutOrdersInputSchema';
import { AddressUncheckedUpdateWithoutOrdersInputSchema } from './AddressUncheckedUpdateWithoutOrdersInputSchema';
import { AddressCreateWithoutOrdersInputSchema } from './AddressCreateWithoutOrdersInputSchema';
import { AddressUncheckedCreateWithoutOrdersInputSchema } from './AddressUncheckedCreateWithoutOrdersInputSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';

export const AddressUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.AddressUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => AddressUpdateWithoutOrdersInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => AddressCreateWithoutOrdersInputSchema),z.lazy(() => AddressUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export default AddressUpsertWithoutOrdersInputSchema;
