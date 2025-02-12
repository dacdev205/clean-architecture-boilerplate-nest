import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';
import { AddressCreateWithoutOrdersInputSchema } from './AddressCreateWithoutOrdersInputSchema';
import { AddressUncheckedCreateWithoutOrdersInputSchema } from './AddressUncheckedCreateWithoutOrdersInputSchema';

export const AddressCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => AddressWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddressCreateWithoutOrdersInputSchema),z.lazy(() => AddressUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export default AddressCreateOrConnectWithoutOrdersInputSchema;
