import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';
import { AddressCreateWithoutAffiliateInputSchema } from './AddressCreateWithoutAffiliateInputSchema';
import { AddressUncheckedCreateWithoutAffiliateInputSchema } from './AddressUncheckedCreateWithoutAffiliateInputSchema';

export const AddressCreateOrConnectWithoutAffiliateInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutAffiliateInput> = z.object({
  where: z.lazy(() => AddressWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddressCreateWithoutAffiliateInputSchema),z.lazy(() => AddressUncheckedCreateWithoutAffiliateInputSchema) ]),
}).strict();

export default AddressCreateOrConnectWithoutAffiliateInputSchema;
