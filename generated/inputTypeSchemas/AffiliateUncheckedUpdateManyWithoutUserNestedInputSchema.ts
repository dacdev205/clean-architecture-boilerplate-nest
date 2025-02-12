import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateWithoutUserInputSchema } from './AffiliateCreateWithoutUserInputSchema';
import { AffiliateUncheckedCreateWithoutUserInputSchema } from './AffiliateUncheckedCreateWithoutUserInputSchema';
import { AffiliateCreateOrConnectWithoutUserInputSchema } from './AffiliateCreateOrConnectWithoutUserInputSchema';
import { AffiliateUpsertWithWhereUniqueWithoutUserInputSchema } from './AffiliateUpsertWithWhereUniqueWithoutUserInputSchema';
import { AffiliateCreateManyUserInputEnvelopeSchema } from './AffiliateCreateManyUserInputEnvelopeSchema';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateUpdateWithWhereUniqueWithoutUserInputSchema } from './AffiliateUpdateWithWhereUniqueWithoutUserInputSchema';
import { AffiliateUpdateManyWithWhereWithoutUserInputSchema } from './AffiliateUpdateManyWithWhereWithoutUserInputSchema';
import { AffiliateScalarWhereInputSchema } from './AffiliateScalarWhereInputSchema';

export const AffiliateUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AffiliateUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AffiliateCreateWithoutUserInputSchema),z.lazy(() => AffiliateCreateWithoutUserInputSchema).array(),z.lazy(() => AffiliateUncheckedCreateWithoutUserInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AffiliateCreateOrConnectWithoutUserInputSchema),z.lazy(() => AffiliateCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AffiliateUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AffiliateUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AffiliateCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AffiliateUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AffiliateUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AffiliateUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AffiliateUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AffiliateScalarWhereInputSchema),z.lazy(() => AffiliateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AffiliateUncheckedUpdateManyWithoutUserNestedInputSchema;
