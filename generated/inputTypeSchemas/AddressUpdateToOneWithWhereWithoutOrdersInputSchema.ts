import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';
import { AddressUpdateWithoutOrdersInputSchema } from './AddressUpdateWithoutOrdersInputSchema';
import { AddressUncheckedUpdateWithoutOrdersInputSchema } from './AddressUncheckedUpdateWithoutOrdersInputSchema';

export const AddressUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => AddressWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddressUpdateWithoutOrdersInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default AddressUpdateToOneWithWhereWithoutOrdersInputSchema;
