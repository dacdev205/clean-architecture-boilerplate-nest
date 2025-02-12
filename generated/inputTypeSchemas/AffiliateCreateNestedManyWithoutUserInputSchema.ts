import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateWithoutUserInputSchema } from './AffiliateCreateWithoutUserInputSchema';
import { AffiliateUncheckedCreateWithoutUserInputSchema } from './AffiliateUncheckedCreateWithoutUserInputSchema';
import { AffiliateCreateOrConnectWithoutUserInputSchema } from './AffiliateCreateOrConnectWithoutUserInputSchema';
import { AffiliateCreateManyUserInputEnvelopeSchema } from './AffiliateCreateManyUserInputEnvelopeSchema';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';

export const AffiliateCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AffiliateCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AffiliateCreateWithoutUserInputSchema),z.lazy(() => AffiliateCreateWithoutUserInputSchema).array(),z.lazy(() => AffiliateUncheckedCreateWithoutUserInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AffiliateCreateOrConnectWithoutUserInputSchema),z.lazy(() => AffiliateCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AffiliateCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AffiliateCreateNestedManyWithoutUserInputSchema;
