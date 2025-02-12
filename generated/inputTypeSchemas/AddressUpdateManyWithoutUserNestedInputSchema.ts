import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddressCreateWithoutUserInputSchema } from './AddressCreateWithoutUserInputSchema';
import { AddressUncheckedCreateWithoutUserInputSchema } from './AddressUncheckedCreateWithoutUserInputSchema';
import { AddressCreateOrConnectWithoutUserInputSchema } from './AddressCreateOrConnectWithoutUserInputSchema';
import { AddressUpsertWithWhereUniqueWithoutUserInputSchema } from './AddressUpsertWithWhereUniqueWithoutUserInputSchema';
import { AddressCreateManyUserInputEnvelopeSchema } from './AddressCreateManyUserInputEnvelopeSchema';
import { AddressWhereUniqueInputSchema } from './AddressWhereUniqueInputSchema';
import { AddressUpdateWithWhereUniqueWithoutUserInputSchema } from './AddressUpdateWithWhereUniqueWithoutUserInputSchema';
import { AddressUpdateManyWithWhereWithoutUserInputSchema } from './AddressUpdateManyWithWhereWithoutUserInputSchema';
import { AddressScalarWhereInputSchema } from './AddressScalarWhereInputSchema';

export const AddressUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AddressUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutUserInputSchema),z.lazy(() => AddressCreateWithoutUserInputSchema).array(),z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema),z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AddressCreateOrConnectWithoutUserInputSchema),z.lazy(() => AddressCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AddressUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AddressUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AddressCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AddressWhereUniqueInputSchema),z.lazy(() => AddressWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AddressWhereUniqueInputSchema),z.lazy(() => AddressWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AddressWhereUniqueInputSchema),z.lazy(() => AddressWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AddressWhereUniqueInputSchema),z.lazy(() => AddressWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AddressUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AddressUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AddressUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AddressUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AddressScalarWhereInputSchema),z.lazy(() => AddressScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AddressUpdateManyWithoutUserNestedInputSchema;
