import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateWithoutAffiliateInputSchema } from './AddressCreateWithoutAffiliateInputSchema';
import { AddressUncheckedCreateWithoutAffiliateInputSchema } from './AddressUncheckedCreateWithoutAffiliateInputSchema';
import { AddressCreateOrConnectWithoutAffiliateInputSchema } from './AddressCreateOrConnectWithoutAffiliateInputSchema';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';

export const AddressCreateNestedOneWithoutAffiliateInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutAffiliateInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutAffiliateInputSchema),z.lazy(() => AddressUncheckedCreateWithoutAffiliateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutAffiliateInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional()
}).strict();

export default AddressCreateNestedOneWithoutAffiliateInputSchema;
