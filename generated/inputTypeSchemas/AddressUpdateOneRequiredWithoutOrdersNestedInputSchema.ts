import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateWithoutOrdersInputSchema } from './AddressCreateWithoutOrdersInputSchema';
import { AddressUncheckedCreateWithoutOrdersInputSchema } from './AddressUncheckedCreateWithoutOrdersInputSchema';
import { AddressCreateOrConnectWithoutOrdersInputSchema } from './AddressCreateOrConnectWithoutOrdersInputSchema';
import { AddressUpsertWithoutOrdersInputSchema } from './AddressUpsertWithoutOrdersInputSchema';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';
import { AddressUpdateToOneWithWhereWithoutOrdersInputSchema } from './AddressUpdateToOneWithWhereWithoutOrdersInputSchema';
import { AddressUpdateWithoutOrdersInputSchema } from './AddressUpdateWithoutOrdersInputSchema';
import { AddressUncheckedUpdateWithoutOrdersInputSchema } from './AddressUncheckedUpdateWithoutOrdersInputSchema';

export const AddressUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutOrdersInputSchema),z.lazy(() => AddressUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddressUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => AddressUpdateWithoutOrdersInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export default AddressUpdateOneRequiredWithoutOrdersNestedInputSchema;
