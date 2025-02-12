import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateWithoutAddressInputSchema } from './AffiliateCreateWithoutAddressInputSchema';
import { AffiliateUncheckedCreateWithoutAddressInputSchema } from './AffiliateUncheckedCreateWithoutAddressInputSchema';
import { AffiliateCreateOrConnectWithoutAddressInputSchema } from './AffiliateCreateOrConnectWithoutAddressInputSchema';
import { AffiliateUpsertWithWhereUniqueWithoutAddressInputSchema } from './AffiliateUpsertWithWhereUniqueWithoutAddressInputSchema';
import { AffiliateCreateManyAddressInputEnvelopeSchema } from './AffiliateCreateManyAddressInputEnvelopeSchema';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateUpdateWithWhereUniqueWithoutAddressInputSchema } from './AffiliateUpdateWithWhereUniqueWithoutAddressInputSchema';
import { AffiliateUpdateManyWithWhereWithoutAddressInputSchema } from './AffiliateUpdateManyWithWhereWithoutAddressInputSchema';
import { AffiliateScalarWhereInputSchema } from './AffiliateScalarWhereInputSchema';

export const AffiliateUncheckedUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.AffiliateUncheckedUpdateManyWithoutAddressNestedInput> = z.object({
  create: z.union([ z.lazy(() => AffiliateCreateWithoutAddressInputSchema),z.lazy(() => AffiliateCreateWithoutAddressInputSchema).array(),z.lazy(() => AffiliateUncheckedCreateWithoutAddressInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutAddressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AffiliateCreateOrConnectWithoutAddressInputSchema),z.lazy(() => AffiliateCreateOrConnectWithoutAddressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AffiliateUpsertWithWhereUniqueWithoutAddressInputSchema),z.lazy(() => AffiliateUpsertWithWhereUniqueWithoutAddressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AffiliateCreateManyAddressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AffiliateWhereUniqueInputSchema),z.lazy(() => AffiliateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AffiliateUpdateWithWhereUniqueWithoutAddressInputSchema),z.lazy(() => AffiliateUpdateWithWhereUniqueWithoutAddressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AffiliateUpdateManyWithWhereWithoutAddressInputSchema),z.lazy(() => AffiliateUpdateManyWithWhereWithoutAddressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AffiliateScalarWhereInputSchema),z.lazy(() => AffiliateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AffiliateUncheckedUpdateManyWithoutAddressNestedInputSchema;
