import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateManyInputSchema } from '../inputTypeSchemas/AddressCreateManyInputSchema'

export const AddressCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AddressCreateManyAndReturnArgs> = z.object({
  data: z.union([ AddressCreateManyInputSchema,AddressCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AddressCreateManyAndReturnArgsSchema;
