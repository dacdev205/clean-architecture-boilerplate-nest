import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AffiliateCreateWithoutOrderInputSchema } from './AffiliateCreateWithoutOrderInputSchema';
import { AffiliateUncheckedCreateWithoutOrderInputSchema } from './AffiliateUncheckedCreateWithoutOrderInputSchema';
import { AffiliateCreateOrConnectWithoutOrderInputSchema } from './AffiliateCreateOrConnectWithoutOrderInputSchema';
import { AffiliateUpsertWithoutOrderInputSchema } from './AffiliateUpsertWithoutOrderInputSchema';
import { AffiliateWhereInputSchema } from './AffiliateWhereInputSchema';
import { AffiliateWhereUniqueInputSchema } from './AffiliateWhereUniqueInputSchema';
import { AffiliateUpdateToOneWithWhereWithoutOrderInputSchema } from './AffiliateUpdateToOneWithWhereWithoutOrderInputSchema';
import { AffiliateUpdateWithoutOrderInputSchema } from './AffiliateUpdateWithoutOrderInputSchema';
import { AffiliateUncheckedUpdateWithoutOrderInputSchema } from './AffiliateUncheckedUpdateWithoutOrderInputSchema';

export const AffiliateUpdateOneWithoutOrderNestedInputSchema: z.ZodType<Prisma.AffiliateUpdateOneWithoutOrderNestedInput> = z.object({
  create: z.union([ z.lazy(() => AffiliateCreateWithoutOrderInputSchema),z.lazy(() => AffiliateUncheckedCreateWithoutOrderInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AffiliateCreateOrConnectWithoutOrderInputSchema).optional(),
  upsert: z.lazy(() => AffiliateUpsertWithoutOrderInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AffiliateWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AffiliateWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AffiliateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AffiliateUpdateToOneWithWhereWithoutOrderInputSchema),z.lazy(() => AffiliateUpdateWithoutOrderInputSchema),z.lazy(() => AffiliateUncheckedUpdateWithoutOrderInputSchema) ]).optional(),
}).strict();

export default AffiliateUpdateOneWithoutOrderNestedInputSchema;
