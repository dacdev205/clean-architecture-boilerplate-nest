import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressUpdateManyMutationInputSchema } from '../inputTypeSchemas/AddressUpdateManyMutationInputSchema'
import { AddressUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AddressUncheckedUpdateManyInputSchema'
import { AddressWhereInputSchema } from '../inputTypeSchemas/AddressWhereInputSchema'

export const AddressUpdateManyArgsSchema: z.ZodType<Prisma.AddressUpdateManyArgs> = z.object({
  data: z.union([ AddressUpdateManyMutationInputSchema,AddressUncheckedUpdateManyInputSchema ]),
  where: AddressWhereInputSchema.optional(),
}).strict() ;

export default AddressUpdateManyArgsSchema;
