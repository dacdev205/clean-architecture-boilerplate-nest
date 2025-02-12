import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateWithoutAddressInputSchema } from './AffiliateCreateWithoutAddressInputSchema';
import { AffiliateUncheckedCreateWithoutAddressInputSchema } from './AffiliateUncheckedCreateWithoutAddressInputSchema';
import { AffiliateCreateOrConnectWithoutAddressInputSchema } from './AffiliateCreateOrConnectWithoutAddressInputSchema';
import { AffiliateCreateManyAddressInputEnvelopeSchema } from './AffiliateCreateManyAddressInputEnvelopeSchema';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';

export const AffiliateCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.AffiliateCreateNestedManyWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => AffiliateCreateWithoutAddressInputSchema),z.lazy(() => AffiliateCreateWithoutAddressInputSchema).array(),z.lazy(() => AffiliateUncheckedCreateWithoutAddressInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutAddressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AffiliateCreateOrConnectWithoutAddressInputSchema),z.lazy(() => AffiliateCreateOrConnectWithoutAddressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AffiliateCreateManyAddressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AffiliateCreateNestedManyWithoutAddressInputSchema;
