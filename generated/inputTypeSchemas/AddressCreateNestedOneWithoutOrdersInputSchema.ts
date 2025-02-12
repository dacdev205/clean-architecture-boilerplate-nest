import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateWithoutOrdersInputSchema } from './AddressCreateWithoutOrdersInputSchema';
import { AddressUncheckedCreateWithoutOrdersInputSchema } from './AddressUncheckedCreateWithoutOrdersInputSchema';
import { AddressCreateOrConnectWithoutOrdersInputSchema } from './AddressCreateOrConnectWithoutOrdersInputSchema';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';

export const AddressCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutOrdersInputSchema),z.lazy(() => AddressUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional()
}).strict();

export default AddressCreateNestedOneWithoutOrdersInputSchema;
