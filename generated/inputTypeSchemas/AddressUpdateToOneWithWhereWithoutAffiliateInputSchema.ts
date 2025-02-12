import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';
import { AddressUpdateWithoutAffiliateInputSchema } from './AddressUpdateWithoutAffiliateInputSchema';
import { AddressUncheckedUpdateWithoutAffiliateInputSchema } from './AddressUncheckedUpdateWithoutAffiliateInputSchema';

export const AddressUpdateToOneWithWhereWithoutAffiliateInputSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutAffiliateInput> = z.object({
  where: z.lazy(() => AddressWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddressUpdateWithoutAffiliateInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutAffiliateInputSchema) ]),
}).strict();

export default AddressUpdateToOneWithWhereWithoutAffiliateInputSchema;
