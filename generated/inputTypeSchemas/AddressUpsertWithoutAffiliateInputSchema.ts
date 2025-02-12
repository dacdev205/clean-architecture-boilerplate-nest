import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressUpdateWithoutAffiliateInputSchema } from './AddressUpdateWithoutAffiliateInputSchema';
import { AddressUncheckedUpdateWithoutAffiliateInputSchema } from './AddressUncheckedUpdateWithoutAffiliateInputSchema';
import { AddressCreateWithoutAffiliateInputSchema } from './AddressCreateWithoutAffiliateInputSchema';
import { AddressUncheckedCreateWithoutAffiliateInputSchema } from './AddressUncheckedCreateWithoutAffiliateInputSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';

export const AddressUpsertWithoutAffiliateInputSchema: z.ZodType<Prisma.AddressUpsertWithoutAffiliateInput> = z.object({
  update: z.union([ z.lazy(() => AddressUpdateWithoutAffiliateInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutAffiliateInputSchema) ]),
  create: z.union([ z.lazy(() => AddressCreateWithoutAffiliateInputSchema),z.lazy(() => AddressUncheckedCreateWithoutAffiliateInputSchema) ]),
  where: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export default AddressUpsertWithoutAffiliateInputSchema;
