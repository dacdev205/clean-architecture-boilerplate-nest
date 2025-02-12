import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateWithoutAffiliateInputSchema } from './AddressCreateWithoutAffiliateInputSchema';
import { AddressUncheckedCreateWithoutAffiliateInputSchema } from './AddressUncheckedCreateWithoutAffiliateInputSchema';
import { AddressCreateOrConnectWithoutAffiliateInputSchema } from './AddressCreateOrConnectWithoutAffiliateInputSchema';
import { AddressUpsertWithoutAffiliateInputSchema } from './AddressUpsertWithoutAffiliateInputSchema';
import { AddressWhereInputSchema } from './AddressWhereInputSchema';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';
import { AddressUpdateToOneWithWhereWithoutAffiliateInputSchema } from './AddressUpdateToOneWithWhereWithoutAffiliateInputSchema';
import { AddressUpdateWithoutAffiliateInputSchema } from './AddressUpdateWithoutAffiliateInputSchema';
import { AddressUncheckedUpdateWithoutAffiliateInputSchema } from './AddressUncheckedUpdateWithoutAffiliateInputSchema';

export const AddressUpdateOneWithoutAffiliateNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneWithoutAffiliateNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutAffiliateInputSchema),z.lazy(() => AddressUncheckedCreateWithoutAffiliateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutAffiliateInputSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutAffiliateInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddressUpdateToOneWithWhereWithoutAffiliateInputSchema),z.lazy(() => AddressUpdateWithoutAffiliateInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutAffiliateInputSchema) ]).optional(),
}).strict();

export default AddressUpdateOneWithoutAffiliateNestedInputSchema;
